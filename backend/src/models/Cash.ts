import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';

import Payments from './Payment';
import ServicePayment from './ServicePayment';

@Table({
    tableName: 'cash',
    timestamps: false
})
export default class Cash extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    cash_id: number;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    input_date: Date;

    @Column({
        type: DataType.DATE,
        allowNull: true
    })
    output_date: Date;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    amount: Number;

    @ForeignKey(() => Payments)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    payment: number;

    @BelongsTo(() => Payments)
    pay_cash: Payments;

    @HasOne(() => ServicePayment, { onDelete: 'NO ACTION', sourceKey: 'cash_id' })
    service_payment: ServicePayment;
}