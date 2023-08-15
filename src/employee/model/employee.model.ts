import { Model } from 'sequelize';
import { Column, Table } from 'sequelize-typescript';

@Table({
  tableName: 'Employee',
  timestamps: true,
})
export class EmployeeModel extends Model<EmployeeModel> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  name: string;

  @Column
  registration: number;
}
