import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../../schemas/user.model';
import { JwtModule } from '@nestjs/jwt';
import { UserDao } from '../../dao/user.dao';

import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
    JwtModule.register({
      global: true,
      secret: process.env.JwtSecret,
      signOptions: { expiresIn: '60h' },
    }),
  ],
  providers: [AuthService, UserDao],
  controllers: [AuthController],
})
export class AuthModule {}
