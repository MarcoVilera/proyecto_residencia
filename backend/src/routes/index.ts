/*
Barrel file for routes
*/
//TEST, CAN BE DELETED
import express from 'express';

const router = express.Router();

export default router.get('/test', (_req, res) => {
    res.send({ message: 'Hello from Express!' });
}); 