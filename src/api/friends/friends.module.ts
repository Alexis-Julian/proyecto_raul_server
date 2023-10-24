import { Module } from '@nestjs/common';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { UserDao } from 'src/dao/user.dao';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.model';
import { FriendsUtils } from './friends-utils.service';

@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  controllers: [FriendsController],
  providers: [FriendsService, FriendsUtils, UserDao],
  exports: [FriendsService, FriendsUtils, UserDao],
})
export class FriendsModule {}
