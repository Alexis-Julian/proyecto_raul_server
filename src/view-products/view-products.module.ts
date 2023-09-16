import { Module } from '@nestjs/common';
import { ViewProductsController } from './view-products.controller';
import { ViewProductsService } from './view-products.service';

@Module({
  controllers: [ViewProductsController],
  providers: [ViewProductsService]
})
export class ViewProductsModule {}
