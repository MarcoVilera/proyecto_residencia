import { Model, Table, Column, ForeignKey, DataType, BelongsTo, HasOne } from "sequelize-typescript";
import CommonArea_Reserve from "./CommonArea_Reserve";
import Users from "./User";
import Cash from "./Cash";

@Table({
    tableName: 'payments',
    timestamps: false
})
export default class Payments extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    payment_id: number;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    payment_date: Date;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    payment_amount: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    user: string;

    @BelongsTo(() => Users)
    pay_user: Users;

    @HasOne(() => CommonArea_Reserve, { onDelete: 'NO ACTION', sourceKey: 'payment_id' })
    Area_Reserve: CommonArea_Reserve;

    @HasOne(() => Cash, { onDelete: 'NO ACTION', sourceKey: 'payment_id' })
    Cash: Cash;

}