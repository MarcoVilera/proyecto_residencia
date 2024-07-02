import express from 'express';
import { sequelize } from './db.controller';
import router from './routes/index';
import routerUsersAdmin from "./routes/usersAdmin";
import routerApartmensAdmin from './routes/apartmentsAdmin';
import bodyParser from 'body-parser';
//import router

const app = express();
const port = 3001;
sequelize.sync();

const ApiRouter = express.Router();

const userRouter = express.Router();
const apartmentRouter = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', ApiRouter)
//TEST, CAN BE DELETED
ApiRouter.use('/', router)

//Admin endpoints
app.use('/admin', userRouter, apartmentRouter);

userRouter.use("/",routerUsersAdmin);
apartmentRouter.use("/",routerApartmensAdmin);


app.listen(port, () => {
    console.log(`Backend is running at http://localhost:3000/api, if only the backend is running is running on http://localhost:${port}/`);
});
