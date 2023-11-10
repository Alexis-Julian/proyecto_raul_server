import { Injectable } from '@nestjs/common/decorators';
import { Chats } from 'src/schemas/chat.model';
import { ChatSchema } from 'src/schemas/chat.model';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ChatDao {
  constructor(@InjectModel('Chats') private chatModel: Model<Chats>) {}
  async findById(id: string) {
    await this.chatModel.findById(id);
  }
  async findOne(query) {
    await this.chatModel.findOne(query && query);
  }
  async findByIdAndDelete(id: string) {
    await this.chatModel.findByIdAndDelete(id);
  }
  async findByIdAndUpdate(id: string) {
    await this.chatModel.findByIdAndUpdate(id);
  }
  async create(members: Array<string>): Promise<Chats> {
    const formatMembers = members.map((member) => {
      return { user: member };
    });

    const chatNew = await this.chatModel.create({
      members: [...formatMembers],
    });
    return chatNew;
  }

  remove(id) {}
}
