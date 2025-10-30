// src/db.ts
import 'dotenv/config';
import { Pool } from 'pg';

export const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT ?? 5432),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  max: 10,              // 同時接続の上限
  idleTimeoutMillis: 30_000
});

// 起動時に簡単な疎通確認
export async function verifyDb() {
  const { rows } = await pool.query('select 1 as ok');
  if (rows?.[0]?.ok !== 1) throw new Error('DB health check failed');
}

// 終了時にクリーンに閉じる
export async function closeDb() {
  await pool.end();
}
