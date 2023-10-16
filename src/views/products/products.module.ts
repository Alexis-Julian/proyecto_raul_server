import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductModule as ProductModuleApi } from 'src/api/product/product.module';

@Module({
  imports: [ProductModuleApi],
  controllers: [ProductsController],
})
export class ProductsModule {}
