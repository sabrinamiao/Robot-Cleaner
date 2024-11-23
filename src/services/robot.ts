import type { Command, Request, Start } from '../types/request';

import { Pool } from 'pg';
import Robot from '../utils/robot';
import env from 'dotenv';
import { insertExecution } from '../queries/database';
import { v4 as uuidv4 } from 'uuid';

env.config();

const pool = new Pool({
    user: process.env.POSTGRES_USER || 'postgres',
    host: process.env.POSTGRES_HOST || 'localhost',
    database: process.env.POSTGRES_DB || 'postgres',
    password: process.env.POSTGRES_PASSWORD || '1234',
    port: Number(process.env.POSTGRES_PORT) || 5432,
});

export const saveToDatabase = async (request: Request): Promise<any> => {
    const start = request?.start as Start;
    const commands = request?.commands as Command[];

    const startTime = process.hrtime();
    const robot = new Robot(start?.x, start?.y);

    for (let i = 0; i < commands.length; i++) {
        robot.move(commands[i].direction, commands[i].steps);
    }
    const result = robot.getCleanedPlaces();
    const endTime = process.hrtime(startTime);

    const duration = endTime[0] + endTime[1] / 1e9;

    const client = await pool.connect();
    const id = uuidv4();
    const response = await client.query(insertExecution, [id, new Date(), commands.length, result, duration]);
    client.release();
    return { id: response.rows[0].id, timestamp: new Date(), commands: commands.length, result, duration };
}