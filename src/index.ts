import apiRouter from './routes/api';
import env from 'dotenv';
import express from 'express';
env.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', apiRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});