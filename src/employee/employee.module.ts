import { Module } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { EmployeeController } from './employee.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { EmployeeModel } from './model/employee.model';

@Module({
  imports: [SequelizeModule.forFeature([EmployeeModel])],
  controllers: [EmployeeController],
  providers: [EmployeeService],
})
export class EmployeeModule {}
