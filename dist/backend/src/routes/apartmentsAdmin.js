"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Apartment_1 = __importDefault(require("../models/Apartment"));
const router = express_1.default.Router();
exports.default = router.get('/apartments', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartments = yield Apartment_1.default.findAll();
        res.send(apartments);
    }
    catch (error) {
        console.log(error);
    }
}));
router.post("/apartments/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const apartments = yield Apartment_1.default.create(req.body);
        apartments.save();
        res.status(201).send(apartments);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}));
