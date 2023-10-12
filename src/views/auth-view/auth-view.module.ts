import { Module } from '@nestjs/common';
import { AuthViewController } from './auth-view.controller';
import { AuthView } from './auth-view';
import { AuthViewService } from './auth-view.service';

@Module({
  controllers: [AuthViewController],
  providers: [AuthView, AuthViewService],
})
export class AuthViewModule {}
