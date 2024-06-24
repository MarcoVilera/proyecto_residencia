// import { Role } from "../Role";
// import { User } from "../User";

// class Owner extends User {

//     private ownerId: number;
//     private apartment: Apartment;

//     //Nombre de usuario por definir
//     private user: string;

//     constructor(name: string, lastname: string, id: string, email: string, role: Role, ownerId: number, apartment: Apartment) {

//         super(name, lastname, id, email, role);

//         this.ownerId = ownerId;
//         this.apartment = apartment;

//     }
// }

import { Table, Column, Model, DataType, ForeignKey, HasOne } from 'sequelize-typescript';
import Users from './User';
import Apartments from './Apartment';

@Table({
    tableName: 'owners',
    timestamps: false
})
export default class Owners extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    owner_id: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    user: string;

    @ForeignKey(() => Apartments)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    apartment: number;

    @HasOne(() => Apartments, { onDelete: 'NO ACTION', sourceKey: 'user' })
    Apartment: Owners;
}