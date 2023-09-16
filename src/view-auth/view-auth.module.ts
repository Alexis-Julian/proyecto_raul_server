import { Module } from '@nestjs/common';
import { ViewAuthController } from './view-auth.controller';
import { ViewAuthService } from './view-auth.service';

@Module({
  controllers: [ViewAuthController],
  providers: [ViewAuthService],
})
export class ViewAuthModule {}
