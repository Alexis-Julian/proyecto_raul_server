import { Injectable, HttpStatus } from '@nestjs/common';
import { UserDao } from 'src/dao/user.dao';
import { Users } from 'src/schemas/user.model';
import mongoose from 'mongoose';

@Injectable()
export class FriendsUtils {
  constructor(private readonly userDao: UserDao) {}
  verifyUsers() {}
  verifyRequests(user: Users, friend: Users): HttpStatus {
    const alreadyFriend = user.friends.some((req) => String(req.friend) == friend.id);

    if (alreadyFriend) return HttpStatus.NOT_FOUND;

    const idFriend = new mongoose.Types.ObjectId(friend.id);

    const pendingInvitation: boolean = user.request.some((req) => String(req.user) == String(idFriend));

    if (!pendingInvitation) return HttpStatus.OK; //Enviar solicitud

    const verifySender: boolean = user.request.some((req) => String(req.user) == String(idFriend) && req.status == true);

    if (verifySender) return HttpStatus.CONFLICT; //Solicitud ya enviada

    return HttpStatus.CREATED; //Crear amigo
  }
  pendingRequest() {}
}
