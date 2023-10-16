import { InjectModel } from '@nestjs/mongoose';
import { User } from 'src/schemas/user.model';
import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from 'src/api/auth/dto/register-auth.dto';
import { PaginateModel } from 'mongoose';
@Injectable()
export class UserDao {
  constructor(@InjectModel('User') private userModel: PaginateModel<User>) {}

  async findAll(page: number, limit: number) {
    try {
      const users = await this.userModel.paginate({ page, limit });
      return users;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findById(id: any) {
    try {
      const userFind: User = await this.userModel.findById(id);
      return userFind;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findOne(query?: any) {
    try {
      const userFind: User = await this.userModel.findOne(query && query);
      return userFind;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findByIdAndDelete(id: string) {
    try {
      const userDelete: User = await this.userModel.findByIdAndDelete(id);

      return userDelete;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findByIdAndUpdate(id: string) {
    try {
      const userUpdate: User = await this.userModel.findByIdAndUpdate(id);

      return userUpdate;
    } catch (err) {
      console.log('Error:' + err.message);

      return null;
    }
  }

  async create(userObject: RegisterAuthDto) {
    try {
      const userRegister: User = new this.userModel(userObject);

      return userRegister;
    } catch (err) {
      console.log('Error:' + err.message);

      return null;
    }
  }
}
