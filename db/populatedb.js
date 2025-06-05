import { Client } from 'pg';
import 'dotenv/config';

const { PGHOST, PGUSER, PGDATABASE, PGPASSWORD } = process.env;

const added = new Date().toLocaleString();

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    author VARCHAR (255),
    message TEXT,
    added TEXT
);

INSERT INTO messages (author, message, added)
VALUES
    ('Amando', 'Hi there', '${added}'),
    ('Charles', 'Hello World', '${added}');
`;

async function main() {
    console.log("seeding...");
    const client = new Client({
        connectionString: `postgresql://${PGUSER}:${PGPASSWORD}@${PGHOST}/${PGDATABASE}?sslmode=require`
    })
    await client.connect();
    await client.query(SQL);
    await client.end();
    console.log("done");
}

main();