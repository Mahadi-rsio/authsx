import { Pool } from 'pg'
import 'dotenv/config'
import { drizzle } from 'drizzle-orm/node-postgres'

const pool = new Pool({
    connectionString: process.env.DB! || 'postgresql://u0_a280@localhost:5432/mydb'
})

export const db = drizzle(pool)
