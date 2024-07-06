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
const User_1 = __importDefault(require("../models/User"));
const router = express_1.default.Router();
exports.default = router.get('/users', (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.findAll();
        res.send(users);
    }
    catch (error) {
        console.log(error);
    }
}));
router.post("/users/new", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield User_1.default.create(req.body);
        user.save();
        res.status(201).send(user);
        /*if (req.body.user_role == "resident") {
            
            const resident = await Residents.create(req.body);
            res.send(resident);
        
        }else if (req.body.user_role == "owner") {
            
            const owner = await Owners.create(req.body);
            res.send(owner);
        }*/
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}));
router.patch("/users/modify/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const userToUpdate = yield User_1.default.findByPk(userId);
        const updateData = req.body;
        //DEFINIR SI HAY OTRO TIPO DE DATO A CAMBIAR EN LOS USUARIOS
        if (userToUpdate && updateData.email) {
            userToUpdate.email = updateData.email;
            yield userToUpdate.save();
            res.status(201).send(userToUpdate);
        }
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}));
router.delete("/users/delete/:userId", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userId = req.params.userId;
        const userDelete = yield User_1.default.findByPk(userId);
        console.log(userId);
        console.log(typeof userId);
        if (userDelete != null) {
            yield User_1.default.destroy({ where: { user_id: userId } });
        }
        else {
            return res.send(404).send({ message: 'ID is not asociate a any user' });
        }
        res.send(200).send(userDelete);
    }
    catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}));
