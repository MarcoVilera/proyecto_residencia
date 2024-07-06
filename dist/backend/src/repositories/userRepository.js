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
exports.UserRepository = void 0;
const User_1 = __importDefault(require("../models/User"));
class UserRepository {
    constructor() { }
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            const users = yield User_1.default.findAll();
            return users;
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield User_1.default.findByPk(id);
            return user;
        });
    }
    createUser(user) {
        return __awaiter(this, void 0, void 0, function* () {
            const newUser = yield User_1.default.create({ user });
            return newUser;
        });
    }
}
exports.UserRepository = UserRepository;
const userRepository = new UserRepository();
/*const userRepository = new UserRepository();
const user = Users.build({
  name: 'John Doe', // Replace with actual user name
  ci: '12345678', // Replace with actual user's identity document number (adjust format if needed)
  email: 'johndoe@example.com', // Replace with actual email address
  password: 'hashed_password', // Replace with a securely hashed password
  user_role: 'admin', // Replace with the user's role (e.g., 'admin', 'resident', 'owner')
});*/
//userRepository.createUser(user);
/*
// Example user data
const userData = {
  name: 'John Doe',
  ci: '12345678',
  email: 'johndoe@example.com',
  // Make sure password is securely hashed before setting
  password: 'hashed_password',
  user_role: 'admin', // Replace with the user's role (e.g., 'admin', 'resident', 'owner')
};

const user1: Users = new Users(userData);
// Create a user instance using build
const user = userRepository.createUser(user1);

console.log(user);*/
