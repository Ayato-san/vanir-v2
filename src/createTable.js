import pkg from 'pg'; // Import pg as default
const { Client } = pkg; // Destructure Client from the imported package
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

async function createTable() {
  try {
    await client.connect();
    console.log('Connected to PostgreSQL database.');

    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY,
        email VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        remember BOOLEAN DEFAULT FALSE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `;

    await client.query(createTableQuery);
    console.log('Table "users" created successfully!');
  } catch (error) {
    console.error('Error creating table:', error);
  } finally {
    await client.end();
  }
}

createTable();
