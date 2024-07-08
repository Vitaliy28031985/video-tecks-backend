import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import videoRouter from './routes/api/video.js';
import authRouter from './routes/api/auth.js';

const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/video', videoRouter);
app.use('/api/auth', authRouter);
app.get('/', (req, res) => {
    res.send(
        '<h1>Hello!</h1>' +
        '<ul><li>Hi 1</li><li>Hi 2</li></ul>'
    );
});

app.use((req, res) => {
    res.status(404).json({
        message: "not found"
    })
})

export default app;