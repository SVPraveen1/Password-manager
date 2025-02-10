// lib/db/index.ts
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core';
// import { createInsertSchema, createSelectSchema } from 'drizzle-zod';
// import { z } from 'zod';

// Define the schema
export const cards = pgTable('cards', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').notNull(),
  cardNumber: text('card_number').notNull(),
  cardHolder: text('card_holder').notNull(),
  expiryDate: text('expiry_date').notNull(),
  cvv: text('cvv').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

export const passwords = pgTable('passwords', {
  id: uuid('id').defaultRandom().primaryKey(),
  userId: text('user_id').notNull(),
  title: text('title').notNull(),
  username: text('username').notNull(),
  password: text('password').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Create database connection
const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle(sql);