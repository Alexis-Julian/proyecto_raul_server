import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
//import { UserDao } from '../auth/user.dao';
import { AuthLoginUserDto } from './dto/auth-login_user.dto';

@Injectable()
export class UserService {
  constructor(/* private readonly userDao: UserDao */) {}

  register(user: CreateUserDto) {
    console.log(user);
    return 'New User';
  }

  async authLogin(payload: AuthLoginUserDto) {
    //const user = await this.userDao.findOne({ email: payload.email });

    return 'user';
  }

  async findAll() {
    return 'SDS';
  }

  async findOne(id: string) {
    return; //await this.userDao.findById(id);
  }

  update() {
    return 'Update user';
  }

  remove() {
    return 'Delete user';
  }
}
