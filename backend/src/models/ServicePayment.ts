import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';

import Cash from './Cash';

@Table({
    tableName: 'service_payments',
    timestamps: false
})
export default class ServicePayment extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    service_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    service_name: string;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    payment_amount: number;

    @ForeignKey(() => Cash)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    cash_movement: number;

    @BelongsTo(() => Cash)
    pay_cash: Cash;

}