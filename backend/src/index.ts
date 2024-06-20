import express from 'express';

const app = express();
const port = 3001;

app.get('/', (_req, res) => {
    res.send({ message: 'Hello from Express!' });
});

app.listen(port, () => {
    console.log(`Backend is running at http://localhost:3000/api`);
});