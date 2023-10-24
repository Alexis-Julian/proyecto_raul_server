import { Injectable } from '@nestjs/common';
import { FriendsService } from 'src/api/friends/friends.service';

@Injectable()
export class ChatService extends FriendsService {}
