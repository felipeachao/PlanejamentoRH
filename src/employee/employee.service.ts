import { Injectable } from '@nestjs/common';
import { CreateEmployeeDto } from './dto/create-employee.dto';
import { UpdateEmployeeDto } from './dto/update-employee.dto';
import { Sequelize, Transaction } from 'sequelize';
import { InjectConnection, InjectModel } from '@nestjs/sequelize';
import { EmployeeModel } from './model/employee.model';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectModel(EmployeeModel)
    private employeeModel: typeof EmployeeModel,
    @InjectConnection()
    private readonly sequelizeInstace: Sequelize,
  ) {}
  async create(createEmployeeDto: CreateEmployeeDto) {
    let transaction: Transaction;
    try {
      transaction = await this.sequelizeInstace.transaction();
      const create = await this.employeeModel.create(createEmployeeDto, {
        transaction,
      });
      await transaction.commit();
      return create;
    } catch (error) {
      console.log(error);
      if (transaction) await transaction.rollback();
      throw error;
    }
  }

  findAll() {
    return `This action returns all employee`;
  }

  findOne(id: number) {
    return `This action returns a #${id} employee`;
  }

  update(id: number, updateEmployeeDto: UpdateEmployeeDto) {
    return `This action updates a #${id} employee`;
  }

  remove(id: number) {
    return `This action removes a #${id} employee`;
  }
}
