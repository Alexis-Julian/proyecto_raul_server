import { Injectable } from '@nestjs/common';
import { UserDao } from 'src/dao/user.dao';
import { Users } from 'src/schemas/user.model';
import { ChatDao } from 'src/dao/chat.dao';
import { Chats } from 'src/schemas/chat.model';
@Injectable()
export class ChatService {
  constructor(
    private readonly userDao: UserDao,
    private readonly chatDao: ChatDao,
  ) {}
  async getChat(idFriend: string, idUser: string) {
    const user: Users = await this.userDao.test(idFriend);

    const chatExcist = user.chats.some((chat) => String(chat.user) == idUser);

    if (chatExcist) return chatExcist;

    const chat = await this.createChat([idUser, idFriend]);

    return chat;
  }
  async createChat(members: Array<string>) {
    const chat = await this.chatDao.create(members);

    const update = { $push: { chats: { idchat: chat.id } } };

    for (const index in members) {
      await this.userDao.findByIdAndUpdate(members[index], update);
    }
    console.log('Nazhe');
    // const user = await this.userDao.findByIdAndUpdate(members[0], update);
    // console.log(user);
    // const friend = await this.userDao.findByIdAndUpdate();
  }
}
