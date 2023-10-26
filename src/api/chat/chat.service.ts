import { Injectable } from '@nestjs/common';
import { UserDao } from 'src/dao/user.dao';
@Injectable()
export class ChatService {
  constructor(private readonly userDao: UserDao) {}
  async getChat(id: string) {
    const user = await this.userDao.findById(id);
  }
}
