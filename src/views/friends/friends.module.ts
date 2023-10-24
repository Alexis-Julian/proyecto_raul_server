import { Module } from '@nestjs/common';
import { FriendsController } from './friends.controller';
import { UserDao } from 'src/dao/user.dao';
import { FriendsService } from 'src/api/friends/friends.service';
import { FriendsUtils } from 'src/api/friends/friends-utils.service';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from 'src/schemas/user.model';
//Modificar estas importanciones
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forFeature([{ name: 'Users', schema: UserSchema }])],
  controllers: [FriendsController],
  providers: [FriendsService, UserDao, FriendsUtils],
})
export class FriendsModule {}
