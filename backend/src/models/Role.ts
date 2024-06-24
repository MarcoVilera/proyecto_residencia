import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import Users from './User';
@Table({
    tableName: 'roles',
    timestamps: false
})
export default class Role extends Model {


    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true

    })
    rol_id: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    rol_name: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    admin: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    create_users: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    edit_users: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    delete_users: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    create_quotas: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    edit_quotas: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    delete_quotas: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    see_cash: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    insert_on_cash: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    extract_of_cash: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    can_reserve_areas: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    can_register_payments: boolean;

    @HasMany(() => Users, { onDelete: 'NO ACTION', sourceKey: 'rol_name' })
    users: Users[];
}