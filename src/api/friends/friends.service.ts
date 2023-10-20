import { Injectable } from '@nestjs/common';
import { CreateFriendDto } from './dto/create-friend.dto';
import { UpdateFriendDto } from './dto/update-friend.dto';
import { UserDao } from 'src/dao/user.dao';
@Injectable()
export class FriendsService {
  constructor(private readonly userDao: UserDao) {}
  create(createFriendDto: CreateFriendDto) {
    return 'This action adds a new friend';
  }

  getFriends(page: number, limit: number, req: any) {
    const _id = req.session.user._id;

    return this.userDao.findAll(page, limit, { _id: _id });
  }

  addFriend(id: number) {
    return `This action returns a #${id} friend`;
  }

  update(id: number, updateFriendDto: UpdateFriendDto) {
    return `This action updates a #${id} friend`;
  }

  remove(id: number) {
    return `This action removes a #${id} friend`;
  }
}
