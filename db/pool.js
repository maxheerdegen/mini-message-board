import { Pool } from 'pg';
import 'dotenv/config';

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env;

export default new Pool({
    connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
}) 