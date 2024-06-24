import { Sequelize } from 'sequelize-typescript';

// Conexión y configuración de la base de datos
export const sequelize = new Sequelize({
    database: 'residencia_db',
    dialect: 'sqlite',
    host: './residencia_db.sqlite',
    models: [__dirname + '/models'],
})