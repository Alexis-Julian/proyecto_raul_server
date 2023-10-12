import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from '../../schemas/product.model';
import { ProductDao } from '../../dao/product.dao';
import productsMiddleware from '../../middlewares/productMiddlewares';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Products', schema: ProductSchema }])],
  providers: [ProductService, ProductDao],
  controllers: [ProductController],
})
export class ProductModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(productsMiddleware).forRoutes({ path: '*', method: 5 });
  }
}
