import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import Users from './User';
import Apartments from './Apartment';

@Table({
    tableName: 'residents',
    timestamps: false
})
export default class Residents extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    resident_id: number;

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
    apartment_n: number;

    @BelongsTo(() => Apartments)
    apartment: Apartments;
}