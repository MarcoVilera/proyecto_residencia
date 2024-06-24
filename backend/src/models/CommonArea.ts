import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import CommonArea_Reserve from './CommonArea_Reserve';

@Table({
    tableName: 'common_areas',
    timestamps: false
})
export default class CommonAreas extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_area: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
        unique: true
    })
    area_name: string;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    OpenTime: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    CloseTime: Date;

    @Column({
        type: DataType.FLOAT,
        allowNull: false
    })
    cost_area: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    available: boolean;

    @HasMany(() => CommonArea_Reserve, { onDelete: 'NO ACTION', sourceKey: 'area_name' })
    Reservations: CommonArea_Reserve[];
}