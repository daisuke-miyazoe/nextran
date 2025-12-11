import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { pool, verifyDb, closeDb } from './db.js';
import usersRouter from './users.routes.js';

const app = express();
const PORT = Number(process.env.PORT ?? 3001);
// Register common middlewares before routers so req.body is populated
app.use(cors());
app.use(express.json());
app.use('/api/users', usersRouter);
// app.use('/api/favorite_station', usersRouter);

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

/** 作成（フロントの投稿） POST /api/favorite_station */
// app.post('/api/favorite_station/:id?', async (req, res) => {
//   const idRaw = req.params?.id ?? (req.body ? (req.body as any).id : undefined);
//   const id = idRaw == null || String(idRaw).trim() === '' ? null : Number(idRaw);
//   if (id !== null && (!Number.isInteger(id) || id <= 0)) {
//     return res.status(400).json({ error: 'invalid id' });
//   }

//   // Accept either string or array; normalize to text[] for Postgres
//   const station_code = (req.body ?? {}).station_code;
//   const codes = station_code == null
//     ? null
//     : (Array.isArray(station_code) ? station_code.map(String) : [String(station_code)]);

//   try {
//     let rows;
//     if (id === null) {
//       const r = await pool.query(
//         `insert into favorite_station (station_code)
//          values ($1)
//          returning id, station_code`,
//         [codes]
//       );
//       rows = r.rows;
//       return res.status(201).json(rows[0]);
//     } else {
//       // If row exists, append new codes (dedup). If not, insert.
//       const existing = await pool.query(
//         'select station_code from favorite_station where id = $1',
//         [id]
//       );
//       if (existing.rowCount && existing.rows[0]) {
//         const current: string[] = Array.isArray(existing.rows[0].station_code)
//           ? existing.rows[0].station_code
//           : [];
//         const incoming: string[] = Array.isArray(codes) ? (codes as string[]) : [];
//         const merged = Array.from(new Set([...current, ...incoming]));
//         const r = await pool.query(
//           `update favorite_station
//              set station_code = $2
//            where id = $1
//            returning id, station_code`,
//           [id, merged]
//         );
//         rows = r.rows;
//         return res.status(200).json(rows[0]);
//       } else {
//         const r = await pool.query(
//           `insert into favorite_station (id, station_code)
//            values ($1, $2)
//            returning id, station_code`,
//           [id, codes]
//         );
//         rows = r.rows;
//         return res.status(201).json(rows[0]);
//       }
//     }
//   } catch (e: any) {
//     if (e?.code === '23505') return res.status(409).json({ error: 'conflict', detail: 'duplicate id or station_code' });
//     if (e?.code === '22P02') return res.status(400).json({ error: 'station_code must be string or array' });
//     res.status(500).json({ error: 'internal error', detail: e?.message });
//   }
// });

app.post('/api/favorite_station', async (req, res) => {

  // Accept either string or array; normalize to text[] for Postgres
  const station_code = (req.body ?? {}).station_code;
  const userId = (req.body ?? {}).user_id;

  const codes = station_code == null
    ? null
    : (Array.isArray(station_code) ? station_code.map(String) : [String(station_code)]);

  try {
    let rows;
  } catch (e: any) {
    if (e?.code === '23505') return res.status(409).json({ error: 'conflict', detail: 'duplicate id or station_code' });
    if (e?.code === '22P02') return res.status(400).json({ error: 'station_code must be string or array' });
    res.status(500).json({ error: 'internal error', detail: e?.message });
  }
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

// Error handler registered last so errors are returned as JSON
app.use((err: any, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error(err);
  if (res.headersSent) return;
  const status = typeof err?.status === 'number' ? err.status : 500;
  const payload: any = { error: 'internal error' };
  if (process.env.NODE_ENV !== 'production') {
    payload.detail = err?.message ?? String(err);
  }
  res.status(status).json(payload);
});
