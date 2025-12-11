// src/users.routes.ts
import { Router } from 'express';
import { pool } from './db.js';
import { getUserTable } from './constant/db_sql.constant.js'
import { pathDefault , pathAndId } from './constant/constant.js'

const router = Router();

/** 一覧取得（初期表示用） GET /api/users */
router.get(pathDefault , async (_req, res) => {
  const { rows } = await pool.query(
    getUserTable
  );
  res.json(rows);
});

/** 作成（フロントの投稿） POST /api/users */
router.post(pathDefault, async (req, res) => {
  const { email, password, name } = req.body ?? {};
  if (!email || !password) return res.status(400).json({ error: 'email and password are required' });

  try {
    const { rows } = await pool.query(
      `insert into users (email, user_password, user_name)
       values ($1, $2, $3)
       returning id, email, user_name, created_at`,
      [email, password, name ?? null]
    );
    res.status(201).json(rows[0]);
  } catch (e: any) {
    if (e?.code === '23505') return res.status(409).json({ error: 'email already exists' });
    res.status(500).json({ error: 'internal error', detail: e?.message });
  }
});

/** 更新 PATCH /api/users/:id */
router.patch(pathAndId, async (req, res) => {
  const id = Number(req.params.id);
  const { email, password, name } = req.body ?? {};
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ error: 'invalid id' });

  // 動的に更新する列を組み立て（来た項目だけ更新）
  const fields: string[] = [];
  const values: any[] = [];
  let idx = 1;
  if (email !== undefined) { fields.push(`email = $${idx++}`); values.push(email); }
  if (password !== undefined) { fields.push(`user_password = $${idx++}`); values.push(password); }
  if (name !== undefined) { fields.push(`user_name = $${idx++}`); values.push(name); }

  if (fields.length === 0) return res.status(400).json({ error: 'no fields to update' });

  values.push(id); // where用
  const sql = `update users set ${fields.join(', ')} where id = $${idx} returning id, email, user_name, created_at`;

  try {
    const { rows } = await pool.query(sql, values);
    if (rows.length === 0) return res.status(404).json({ error: 'not found' });
    res.json(rows[0]);
  } catch (e: any) {
    if (e?.code === '23505') return res.status(409).json({ error: 'email already exists' });
    res.status(500).json({ error: 'internal error', detail: e?.message });
  }
});

/** 削除 DELETE /api/users/:id */
router.delete(pathAndId, async (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id <= 0) return res.status(400).json({ error: 'invalid id' });

  const { rowCount } = await pool.query('delete from users where id = $1', [id]);
  if (rowCount === 0) return res.status(404).json({ error: 'not found' });
  res.status(204).end();
});

/** 一覧取得（全ユーザー表示） GET /api/favorite_station */
router.get(pathDefault, async (_req, res) => {
  const { rows } = await pool.query(
    'select id, station_code from favorite_station order by id desc limit 200'
  );
  res.json(rows);
});

/** 新規作成（フロントの投稿） POST /api/favorite_station */
router.post(pathDefault, async (req, res) => {
  const { id, station_code } = req.body ?? {};
  if (!id) return res.status(400).json({ error: 'id is required' });

  try {
    const { rows } = await pool.query(
      `insert into favorite_station (id, station_code)
       values ($1, $2)
       returning id, station_code`,
      [id, station_code ?? null]
    );
    res.status(201).json(rows[0]);
  } catch (e: any) {
    if (e?.code === '23505') return res.status(409).json({ error: 'id already exists' });
    res.status(500).json({ error: 'internal error', detail: e?.message });
  }
});

/**
 * POST /api/favorite_station/:id
 * station_code の追加（新規 or 既存配列への追加）
 */
router.post(pathAndId, async (req, res) => {
  const id = Number(req.params.id);
  const { station_code } = req.body ?? {};

  if (!station_code) {
    return res.status(400).json({ error: 'station_code is required' });
  }

  try {
    // ① 既存レコードの有無を確認
    const existing = await pool.query(
      `SELECT id, station_code FROM favorite_station WHERE id = $1`,
      [id]
    );

    // ② レコードがある場合：配列へ追加
    if (existing.rows.length > 0) {
      const currentArray: string[] = existing.rows[0].station_code ?? [];

      // 既に存在していたらエラー
      if (currentArray.includes(station_code)) {
        return res.status(409).json({
          error: 'station_code already exists in this record'
        });
      }

      // 追加して更新
      const newArray = [...currentArray, station_code];

      const updated = await pool.query(
        `
        UPDATE favorite_station
        SET station_code = $1
        WHERE id = $2
        RETURNING id, station_code
        `,
        [newArray, id]
      );

      return res.status(200).json(updated.rows[0]);
    }

    // ③ レコードが無ければ新規作成
    const inserted = await pool.query(
      `
      INSERT INTO favorite_station (id, station_code)
      VALUES ($1, $2)
      RETURNING id, station_code
      `,
      [id, [station_code]] // 配列にして渡す
    );

    return res.status(201).json(inserted.rows[0]);
  } catch (e: any) {
    return res.status(500).json({
      error: 'internal error',
      detail: e?.message
    });
  }
});

export default router;
