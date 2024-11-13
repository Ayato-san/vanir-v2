import dotenv from 'dotenv'; // Import dotenv
import { Client } from 'pg'; // Import PostgreSQL client

dotenv.config(); // Load environment variables from .env file

// Create PostgreSQL client with environment variables
const client = new Client({
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT), // Ensure port is a number
  database: process.env.POSTGRES_DB,
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
});

async function connectToDatabase() {
  try {
    await client.connect();
    console.log('Connected to the PostgreSQL database.');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
  }
}

// Function to fetch data from the database
async function fetchData() {
  try {
    const result = await client.query('SELECT * FROM your_table_name');
    console.log(result.rows); // Log fetched data
  } catch (error) {
    console.error('Query failed:', error);
  }
}

connectToDatabase();
