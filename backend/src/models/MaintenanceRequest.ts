import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import Users from './User';

@Table({
    tableName: 'maintenance_requests',
    timestamps: false
})
export default class MaintenanceRequests extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_request: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    user_requesting: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    description: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    date_request: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    state: string;

    @BelongsTo(() => Users, { foreignKey: 'user_requesting', targetKey: 'ci' })
    user_request: Users;
}