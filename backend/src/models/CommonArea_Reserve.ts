import { Table, Column, Model, DataType, ForeignKey, HasOne, BelongsTo } from 'sequelize-typescript';
import CommonAreas from './CommonArea';
import Users from './User';
import Payments from './Payment';

@Table({
    tableName: 'common_area_reserves',
    timestamps: false
})
export default class CommonArea_Reserve extends Model {

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    })
    id_reserve: number;

    @ForeignKey(() => Users)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    user: string;

    @ForeignKey(() => CommonAreas)
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    area: string;



    @Column({
        type: DataType.DATE,
        allowNull: false
    })
    date_reserve: Date;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    pay_area: number;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    duration_reserve: string;

    @BelongsTo(() => CommonAreas, { foreignKey: 'area', targetKey: 'area_name' })
    common_area: CommonAreas;

    @ForeignKey(() => Payments)
    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    payment_area: number;

    
}