import { Table, Column, Model, DataType, HasOne, ForeignKey, HasMany, BelongsTo } from 'sequelize-typescript';
import Owners from './Owner';
import Residents from './Resident';

@Table({
  tableName: 'apartments',
  timestamps: false
})
export default class Apartments extends Model {

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
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
    allowNull: true,
    defaultValue: null
  })
  owner: string | null;

  @HasMany(() => Residents)
  Residents: Residents[];

  @HasOne(() => Owners)
  Owner: Apartments;

  @BelongsTo(() => Owners)
  aptOwner: Owners;
}