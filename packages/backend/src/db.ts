// src/db.ts
import 'dotenv/config';
import { Pool } from 'pg';

export const pool = new Pool({
  host: process.env.PGHOST,
  port: Number(process.env.PGPORT ?? 5432),
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  max: 10,              // 蜷梧凾謗･邯壹・荳企剞
  idleTimeoutMillis: 30_000
});

// 襍ｷ蜍墓凾縺ｫ邁｡蜊倥↑逍朱夂｢ｺ隱・
export async function verifyDb() {
  const { rows } = await pool.query('select 1 as ok');
  if (rows?.[0]?.ok !== 1) throw new Error('DB health check failed');
}

// 邨ゆｺ・凾縺ｫ繧ｯ繝ｪ繝ｼ繝ｳ縺ｫ髢峨§繧・
export async function closeDb() {
  await pool.end();
}

// Ensure users table and expected columns exist (simple migration)
let usersTableEnsured = false;
export async function ensureUsersTable() {
  if (usersTableEnsured) return;
  // Create table if missing with expected schema
  await pool.query(`
    create table if not exists users (
      id serial primary key,
      email text unique,
      user_password text not null,
      user_name text,
      created_at timestamp not null default now()
    )
  `);

  // Add missing columns if table exists with a different schema
  await pool.query('alter table users add column if not exists email text');
  await pool.query('alter table users add column if not exists user_password text');
  await pool.query('alter table users add column if not exists user_name text');
  await pool.query("alter table users add column if not exists created_at timestamp not null default now()");

  // Add unique constraint on email if absent
  await pool.query(`
    do $$
    begin
      if not exists (
        select 1 from pg_constraint where conname = 'users_email_key'
      ) then
        alter table users add constraint users_email_key unique (email);
      end if;
    end$$;
  `);

  usersTableEnsured = true;
}

let favoriteStationTableEnsured = false;
export async function ensureFavoriteStationTable() {
  if (favoriteStationTableEnsured) return;
  // Create table if missing with expected schema
  await pool.query(`
    create table if not exists favorite_station (
      id serial primary key,
      station_code text[] unique,
      times_at timestamp not null default now()
    )
  `);

  // Add missing columns if table exists with a different schema
  await pool.query('alter table favorite_station add column if not exists station_code text[]');
  await pool.query("alter table favorite_station add column if not exists timed_at timestamp not null default now()");

  // Add unique constraint on email if absent
  // await pool.query(`
  //   do $$
  //   begin
  //     if not exists (
  //       select 1 from pg_constraint where conname = 'users_email_key'
  //     ) then
  //       alter table favorite_station add constraint favorite_station_email_key unique (email);
  //     end if;
  //   end$$;
  // `);

  favoriteStationTableEnsured = true;
}