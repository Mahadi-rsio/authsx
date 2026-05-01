import { Pool } from 'pg'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'

const pool = new Pool({
    connectionString: process.env.DB!
})

export const db = drizzle(pool)
