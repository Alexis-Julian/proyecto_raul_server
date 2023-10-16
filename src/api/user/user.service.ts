import { Injectable } from '@nestjs/common';
import { UserDao } from 'src/dao/user.dao';

@Injectable()
export class UserService {
  constructor(private readonly userDao: UserDao) {}

  async findAll(page: number, limit: number) {
    return this.userDao.findAll(page, limit);
  }

  async findOne() {
    return; //await this.userDao.findById(id);
  }

  update() {
    return 'Update user';
  }

  remove() {
    return 'Delete user';
  }
}
