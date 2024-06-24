import { Table, Column, Model, DataType, HasOne, ForeignKey } from 'sequelize-typescript';
import Owners from './Owner';

@Table({
  tableName: 'apartments',
  timestamps: false
})
export default class Apartments extends Model {

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  })
  apartment_id: number;

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  state: string;

  @ForeignKey(() => Owners)
  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  owner: string;

  @HasOne(() => Owners)
  Owner: Apartments;
}