import { Pool } from 'pg';
import 'dotenv/config';

const { HOST, USER, DATABASE, PORT } = process.env;

export default new Pool({
    connectionString: `postgresql://${USER}@${HOST}:${PORT}/${DATABASE}`
}) 