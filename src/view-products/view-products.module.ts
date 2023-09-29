import { Module } from '@nestjs/common';
import { ViewProductsController } from './view-products.controller';
import { ProductService } from 'src/api/product/product.service';
import { ProductDao } from 'src/dao/product.dao';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from 'src/schemas/product.model';
@Module({
  imports: [MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }])],
  controllers: [ViewProductsController],
  providers: [ProductService, ProductDao],
})
export class ViewProductsModule {}
