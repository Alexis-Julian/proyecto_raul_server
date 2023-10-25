import { Module } from '@nestjs/common';
import { MyGateway } from './gateway';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.model';
import { UserDao } from 'src/dao/user.dao';
/* import { FriendsService } from 'src/api/friends/friends.service';
import { UserDao } from 'src/dao/user.dao';
import { FriendsUtils } from 'src/api/friends/friends-utils.service';
import { SocketEventHandler } from './gateway-chat';
import { FriendsModule } from 'src/api/friends/friends.module'; */
/* ConfigModule.forRoot(), MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }]) */
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  providers: [MyGateway, UserDao],
})
export class GatewayModule {}
