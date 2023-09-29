/* Funcionalidades */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

/* App.Modulos */
import { ViewAuthModule } from './view-auth/view-auth.module';
import { ViewProductsModule } from './view-products/view-products.module';
import { SessionModule } from './api/session/session.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { ProductModule } from './api/product/product.module';
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO), ProductModule, SessionModule, UserModule, AuthModule, ViewAuthModule, ViewProductsModule, ProductModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
