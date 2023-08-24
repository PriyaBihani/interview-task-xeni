import dotenv from 'dotenv';
dotenv.config('../.env');

import express from 'express';
import movieRouter from './routes/movie.js';
const app = express();

app.use(express.json());
app.use('/movies', movieRouter)

const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('server is running');
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});