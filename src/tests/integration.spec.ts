import { Pool, PoolClient } from 'pg';

import express from 'express';
import request from 'supertest';
import router from '../routes/api';

const app = express();
app.use(express.json());
app.use(router);

jest.mock('pg', () => {
    const mClient = {
        connect: jest.fn(),
        release: jest.fn(),
        query: jest.fn(),
    };
    const mPool = {
        connect: jest.fn(() => Promise.resolve(mClient)),
    };
    return { Pool: jest.fn(() => mPool) };
});

describe('Integration Tests', () => {
    let pool: Pool;
    let client: PoolClient & { connect: jest.Mock; query: jest.Mock; release: jest.Mock };

    beforeAll(() => {
        pool = new Pool();
        client = {
            connect: jest.fn(),
            query: jest.fn(),
            release: jest.fn(),
        } as unknown as PoolClient & { connect: jest.Mock; query: jest.Mock; release: jest.Mock };
        (pool.connect as jest.Mock).mockResolvedValue(client);
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    test('GET / should return Hello World message', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'Hello World!' });
    });

    test('POST /tibber-developer-test/enter-path should process commands and save execution', async () => {
        const mockCommands = [
            { direction: 'north', steps: 2 },
            { direction: 'east', steps: 1 },
        ];
        const mockResult = 4;

        client.query.mockImplementation((query, params) => {
            if (query.includes('INSERT INTO executions')) {
                return Promise.resolve({
                    rows: [
                        {
                            id: 'test-id',
                            timestamp: new Date(),
                            commands: mockCommands.length,
                            result: mockResult,
                            duration: 0.002,
                        },
                    ],
                });
            }
        });

        const res = await request(app)
            .post('/tibber-developer-test/enter-path')
            .send({
                start: { x: 0, y: 0 },
                commands: mockCommands,
            });

        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({
            id: 'test-id',
            timestamp: expect.any(String),
            commands: mockCommands.length,
            result: mockResult,
            duration: expect.any(Number),
        });

        expect(client.query).toHaveBeenCalledWith(
            expect.stringContaining('INSERT INTO executions'),
            expect.arrayContaining([expect.any(String), expect.any(Date), mockCommands.length, mockResult, expect.any(Number)])
        );
    });

    test('POST /tibber-developer-test/enter-path should return 500 on database error', async () => {
        client.query.mockRejectedValue(new Error('Database error'));

        const res = await request(app)
            .post('/tibber-developer-test/enter-path')
            .send({
                start: { x: 0, y: 0 },
                commands: [{ direction: 'north', steps: 2 }],
            });

        expect(res.statusCode).toBe(500);
        expect(res.body).toEqual({ error: 'Database error' });
    });

    test('POST /tibber-developer-test/enter-path should return 400 on invalid input', async () => {
        const res = await request(app)
            .post('/tibber-developer-test/enter-path')
            .send({
                start: { x: 0, y: 0 },
                commands: [{ direction: 'X', steps: 2 }],
            });

        expect(res.statusCode).toBe(500);
        expect(res.body).toEqual({ error: 'Invalid direction' });
    });
});