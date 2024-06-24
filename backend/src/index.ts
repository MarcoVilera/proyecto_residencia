import express from 'express';
import { sequelize } from './db.controller';
import router from './routes/index';
const app = express();
const port = 3001;
sequelize.sync();

const ApiRouter = express.Router();
app.use('/api', ApiRouter)
//TEST, CAN BE DELETED
ApiRouter.use('/', router)

app.listen(port, () => {
    console.log(`Backend is running at http://localhost:3000/api, if only the backend is running is running on http://localhost:${port}/`);
});