import { Module } from '@nestjs/common';
import { ProductsModule } from './api-products/products.module';
import { AuthModule } from './api-auth/auth.module';
import { ViewAuthModule } from './view-auth/view-auth.module';
import { ViewProductsModule } from './view-products/view-products.module';

@Module({
  imports: [ProductsModule, AuthModule, ViewAuthModule, ViewProductsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
