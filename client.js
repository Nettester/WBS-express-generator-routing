// imports
require('dotenv').config()
const { Pool } = require('pg')

// const variables
const port = process.env.PORT ?? defaultPort;

// database
const databaseConnectionPool = new pg.Pool({
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
});