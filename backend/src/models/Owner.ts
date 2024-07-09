import { Table, Column, Model, DataType, ForeignKey, HasOne, HasMany } from 'sequelize-typescript';
import Users from './User';
import Apartments from './Apartment';
import Quotas from './Quota';

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
        allowNull: true,
        defaultValue: null
    })
    apartment: number | null;


    @HasMany(() => Quotas, { onDelete: 'NO ACTION', sourceKey: 'user' })
    Quotas: Quotas[];

    @HasOne(() => Apartments, { onDelete: 'NO ACTION', sourceKey: 'user' })
    Apartment: Apartments[];
}