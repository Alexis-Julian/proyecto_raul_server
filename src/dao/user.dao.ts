import { InjectModel } from '@nestjs/mongoose';
import { Users } from 'src/schemas/user.model';
import { Injectable } from '@nestjs/common';
import { RegisterAuthDto } from 'src/api/auth/dto/register-auth.dto';
import { PaginateModel } from 'mongoose';
@Injectable()
export class UserDao {
  constructor(@InjectModel('Users') private userModel: PaginateModel<Users>) {}

  async findAll(page: number, limit: number, query?) {
    try {
      // const users = await this.userModel.paginate(query && query, { page: page, limit: limit });
      const users = await this.userModel.findById(query).select('-_id friends').populate('friends.friend');
      const friends = users.friends.map((user) => user.friend);
      return friends;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findById(id: any) {
    try {
      const userFind: Users = await this.userModel.findById(id);
      return userFind;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async test(id: any) {
    try {
      const userFind: Users = await this.userModel.findById(id).populate('chats.idchat');
      return userFind;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findByName(name: string) {
    try {
      return await this.userModel.find({ username: { $regex: new RegExp(name, 'i') } });
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findOne(query?: any) {
    try {
      const userFind: Users = await this.userModel.findOne(query && query);
      return userFind;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findByIdAndDelete(id: string) {
    try {
      const userDelete: Users = await this.userModel.findByIdAndDelete(id);

      return userDelete;
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findByIdAndUpdate(id: string, query?) {
    try {
      const userUpdate: Users = await this.userModel.findByIdAndUpdate(id, query && query);

      return userUpdate;
    } catch (err) {
      console.log('Error:' + err.message);

      return null;
    }
  }

  async create(userObject: RegisterAuthDto) {
    try {
      const userRegister: Users = await new this.userModel(userObject).save();
      return userRegister;
    } catch (err) {
      console.log('Error:' + err.message);

      return null;
    }
  }
}
