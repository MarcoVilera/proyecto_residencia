import CommonArea_Reserve from "./CommonArea_Reserve";
import Owners from "./Owner";
import Role from "./Role";

import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasOne } from 'sequelize-typescript';
import MaintenanceRequests from "./MaintenanceRequest";

@Table({
    tableName: 'users',
    timestamps: false
})
export default class Users extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
        
    })
    user_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    ci: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    password: string;

    @ForeignKey(() => Role)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    user_role: string;

    @BelongsTo(() => Role)
    role: Role;

    @HasOne(() => Owners, { onDelete: 'NO ACTION', sourceKey: 'name' })
    owner: Owners;

    @HasOne(() => CommonArea_Reserve, { onDelete: 'NO ACTION', sourceKey: 'name' })
    common_area_reserve: CommonArea_Reserve;

    @HasOne(() => MaintenanceRequests, { onDelete: 'NO ACTION', sourceKey: 'name' })
    maintenance_request: MaintenanceRequests;

}    

    