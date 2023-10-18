import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../../schemas/product.model';
import { UserSchema } from 'src/schemas/user.model';
import { ProductDao } from '../../dao/product.dao';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Products', schema: ProductSchema },
      { name: 'Users', schema: UserSchema },
    ]),
  ],
  providers: [ProductService, ProductDao],
  controllers: [ProductController],
  exports: [ProductService],
})
export class ProductModule {}
