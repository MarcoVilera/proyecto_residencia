import { Table, Column, Model, DataType, HasOne, ForeignKey } from 'sequelize-typescript';
import Users from './User';

@Table({
    tableName: 'notifications',
    timestamps: false
})
export default class Notifications extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    notification_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    title: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    message: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    date: Date;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    user: string;

}
