import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';

import Owners from './Owner';

@Table({
    tableName: 'quotas',
    timestamps: false
})
export default class Quotas extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    quota_id: number;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    amount: number;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    deadline: Date;

    @ForeignKey(() => Owners)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    owner: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    status: boolean;

    @BelongsTo(() => Owners)
    Owner: Quotas;
}