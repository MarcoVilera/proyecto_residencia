"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_controller_1 = require("./db.controller");
const index_1 = __importDefault(require("./routes/index"));
const usersAdmin_1 = __importDefault(require("./routes/usersAdmin"));
const apartmentsAdmin_1 = __importDefault(require("./routes/apartmentsAdmin"));
const body_parser_1 = __importDefault(require("body-parser"));
//import router
const app = (0, express_1.default)();
const port = 3001;
db_controller_1.sequelize.sync();
const ApiRouter = express_1.default.Router();
const userRouter = express_1.default.Router();
const apartmentRouter = express_1.default.Router();
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use('/api', ApiRouter);
//TEST, CAN BE DELETED
ApiRouter.use('/', index_1.default);
//Admin endpoints
app.use('/admin', userRouter, apartmentRouter);
userRouter.use("/", usersAdmin_1.default);
apartmentRouter.use("/", apartmentsAdmin_1.default);
app.listen(port, () => {
    console.log(`Backend is running at http://localhost:3000/api, if only the backend is running is running on http://localhost:${port}/`);
});
