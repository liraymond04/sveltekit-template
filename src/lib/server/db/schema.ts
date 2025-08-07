import { sqliteTable, integer, text } from 'drizzle-orm/sqlite-core';

export const posts = sqliteTable('posts', {
	id: integer({ mode: 'number' }).primaryKey({ autoIncrement: true }),
	title: text().notNull(),
	content: text().notNull(),
});
