"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
// Conexión y configuración de la base de datos
exports.sequelize = new sequelize_typescript_1.Sequelize({
    database: 'residencia_db',
    dialect: 'sqlite',
    host: './residencia_db.sqlite',
    models: [__dirname + '/models'],
});
