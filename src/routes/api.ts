import express from 'express';
import { saveToDatabase } from '../services/robot';
const router = express.Router();



router.get('/', async (req, res) => {
    res.json({ message: 'Hello World!' });
});
router.post('/tibber-developer-test/enter-path', async (req, res) => {
    try {
        const response = await saveToDatabase(req.body);
        res.json(response);
    } catch (err) {
        const error = err as Error;
        const message = error.message || 'Internal server error';
        res.status(500).json({ error: message });
    }
});

export default router;