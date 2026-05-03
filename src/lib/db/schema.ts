import { boolean, pgTable, text, uuid } from 'drizzle-orm/pg-core'

export const auth_instance = pgTable('auth_instance', {
    tenant_id: text('tenant_id').notNull(),
    auth_instance_id: uuid('auth_instance_id').notNull().defaultRandom().primaryKey(),
    emailPassword: boolean('email_password').notNull().default(true),
})
