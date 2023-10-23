import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserDao } from 'src/dao/user.dao';
import { Users } from 'src/schemas/user.model';
import mongoose from 'mongoose';
import { FriendsUtils } from './friends-utils.service';

@Injectable()
export class FriendsService {
  constructor(
    private readonly userDao: UserDao,
    private readonly friendsUtils: FriendsUtils,
  ) {}

  getFriends(page: number, limit: number, req: any) {
    const _id = req.session.user._id;

    return this.userDao.findAll(page, limit, { _id: _id });
  }

  async addFriend(id: string, req: any) {
    let saveUser;
    let saveFriend;
    const _id = req.session.user._id;

    const friend: Users = await this.userDao.findById(id);
    if (!friend) return new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);

    const user: Users = await this.userDao.findById(_id);
    if (!user) return new HttpException('ERROR_SYNTAX', HttpStatus.NOT_ACCEPTABLE);

    const idFriend = new mongoose.Types.ObjectId(friend.id);
    const idUser = new mongoose.Types.ObjectId(user.id);

    const response = this.friendsUtils.verifyRequests(user, friend);

    switch (response) {
      case HttpStatus.CONFLICT:
        //Error ya se envio la solicitud [409]
        return new HttpException('YOU_HAVE_A_PENDING_FRIEND', response);
      case HttpStatus.OK:
        //Deja la solicitud en Request [200]
        user.request.push({ user: idFriend, status: true });
        friend.request.push({ user: idUser, status: false });

        saveUser = await this.userDao.findByIdAndUpdate(String(idUser), user);
        saveFriend = await this.userDao.findByIdAndUpdate(String(idFriend), friend);
        if (saveUser && saveFriend) return new HttpException('REQUEST_SENT', response);

        break;
      case HttpStatus.CREATED:
        //Agrega de amigos a ambos usuarios [201]
        const deleteRequestUser = user.request.filter((req) => String(req.user) != String(idFriend));
        const deleteRequestFriend = friend.request.filter((req) => String(req.user) != String(idUser));

        user.request = deleteRequestUser;
        friend.request = deleteRequestFriend;

        user.friends.push({ friend: idFriend });
        friend.friends.push({ friend: idUser });

        saveUser = await this.userDao.findByIdAndUpdate(String(idUser), user);
        saveFriend = await this.userDao.findByIdAndUpdate(String(idFriend), friend);
        if (saveUser && saveFriend) return new HttpException('FRIEND_ADDED', response);

      case HttpStatus.NOT_FOUND:
        //Ya son amigos [404]
        return new HttpException('THEY_ARE_ALREADY_FRIENDS', response);
      case HttpStatus.BAD_REQUEST:
        //Error en la peticion [400]
        return new HttpException('ERROR', HttpStatus.BAD_REQUEST);
    }
  }

  async removeFriend(id: string, req: any) {
    const _id = req.session.user._id;
    const user: Users = await this.userDao.findById(_id);
    const userFriend: Users = await this.userDao.findById(id);

    if (!user) return new HttpException('USER_NOT_FOUND', HttpStatus.NOT_FOUND);

    user.friends = user.friends.filter((friend) => String(friend.friend) != userFriend.id);
    userFriend.friends = userFriend.friends.filter((friend) => String(friend.friend) != user.id);

    const userUpdate = await this.userDao.findByIdAndUpdate(user.id, user);
    const userFriendUpdate = await this.userDao.findByIdAndUpdate(userFriend.id, userFriend);

    if (userFriendUpdate && userUpdate) return new HttpException('FRIEND_DELETED', HttpStatus.ACCEPTED);

    return new HttpException('ERROR', HttpStatus.BAD_REQUEST);
  }
}
