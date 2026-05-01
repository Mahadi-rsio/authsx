/**
 * Drizzle Kit configuration file
 *
 * Docs: https://orm.drizzle.team/docs/drizzle-config-file
 */

import { defineConfig } from 'drizzle-kit';
import 'dotenv/config';

export default defineConfig({
    out: './migration',
    schema: './src/lib/db/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://u0_a280@localhost:5432/mydb',
    },
});
