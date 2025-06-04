import { Pool } from 'pg';

export default new Pool({
    connectionString: "postgresql://maxheerdegen@localhost:5432/message_board"
}) 