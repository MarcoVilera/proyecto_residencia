"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
Barrel file for routes
*/
//TEST, CAN BE DELETED
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
exports.default = router.get('/test', (_req, res) => {
    res.send({ message: 'Hello from Express!' });
});
