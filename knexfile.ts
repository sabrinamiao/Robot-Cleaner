import type { Knex } from "knex";
import dotenv from 'dotenv';
dotenv.config();

const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
        host: process.env.POSTGRES_HOST || 'localhost',
        user: process.env.POSTGRES_USER  || 'postgres',
        password: process.env.POSTGRES_PASSWORD || '1234',
        database: process.env.POSTGRES_DB || 'postgres'
      }
  },
};

module.exports = config;
