import { Module } from '@nestjs/common';
import { MockingService } from './mocking.service';
import { MockingController } from './mocking.controller';

@Module({
  controllers: [MockingController],
  providers: [MockingService],
})
export class MockingModule {}
