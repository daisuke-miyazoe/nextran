import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { pool, verifyDb, closeDb } from './db.js'; // ←拡張子 .js（ESM はビルド後を見越す）

const app = express();
const PORT = Number(process.env.PORT ?? 3001);

app.use(cors());
app.use(express.json());

// --- 既存のルート ---
app.get('/', (req, res) => {
  res.json({ message: 'Express.js backend is running!' });
  console.log('hello')
});

app.get('/api/health', async (req, res) => {
  try {
    await verifyDb();
    res.json({ status: 'ok', db: 'up', timestamp: new Date().toISOString() });
  } catch (e) {
    res.status(500).json({ status: 'ng', reason: (e as Error).message });
  }
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'こんにちは、バックエンドから！' });
});

// DB操作
app.post('/api/favorite_station', async (_req, res) => {
  await pool.query(`
    create table if not exists users (
      id serial primary key,
      station_code text unique not null,
      station_name text not null
    )
  `);
  res.json({ ok: true });
});

/**
 * ユーザー作成
 * body: { email: string, password: string, name?: string }
 */
// app.post('/api/users', async (req, res) => {
//   const { email, password, name } = req.body ?? {};
//   if (!email || !password) return res.status(400).json({ error: 'email and password are required' });

//   try {
//     const { rows } = await pool.query(
//       `insert into users (email, user_password, user_name)
//        values ($1, $2, $3)
//        returning id, email, user_name, created_at`,
//       [email, password, name ?? null]
//     );
//     res.status(201).json(rows[0]);
//   } catch (e: any) {
//     if (e?.code === '23505') { // unique_violation
//       return res.status(409).json({ error: 'email already exists' });
//     }
//     res.status(500).json({ error: 'internal error', detail: e?.message });
//   }
// });

/**
 * ユーザー一覧
 */
app.get('/api/users', async (_req, res) => {
  const { rows } = await pool.query(
    'select id, email, user_name, created_at from users order by id desc limit 100'
  );
  res.json(rows);
});

app.get('/api/favorite_station', async (_req, res) => {
  const { rows } = await pool.query(
    'select * from favorite_station order by id desc limit 100'
  );
  res.json(rows);
});

// --- 起動＆終了ハンドリング ---
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

const shutdown = async (signal: string) => {
  console.log(`[${signal}] shutting down...`);
  server.close(async () => {
    await closeDb();
    process.exit(0);
  });
};

process.on('SIGINT', () => shutdown('SIGINT'));
process.on('SIGTERM', () => shutdown('SIGTERM'));
