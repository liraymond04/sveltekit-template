// TODO
//
// We can define our database schema here (we can search 'Drizzle ORM SQLite' for more resources)
//
// What should the shape of our data look like? What kind of fields do we need to store?
//
import { sqliteTable, integer } from 'drizzle-orm/sqlite-core';

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	age: integer('age')
});
