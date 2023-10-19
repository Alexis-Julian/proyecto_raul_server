/* Funcionalidades */
import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

/* MiddleWares */
import productsMiddleware from './middlewares/productMiddlewares';
import authMiddleware from './middlewares/authMiddleware';
/* App.Modulos */
import { SessionModule } from './api/session/session.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { ProductModule } from './api/product/product.module';
import { ProductsModule as viewProductsModule } from './views/products/products.module';
import { ChatModule as viewChatModule } from './views/chat/chat.module';
import { AuthViewModule } from './views/auth-view/auth-view.module';
import { WorkersModule } from './api/workers/workers.module';
import { GatewayModule } from './gateway/gateway.module';
@Module({
  imports: [ConfigModule.forRoot(), MongooseModule.forRoot(process.env.MONGO), ProductModule, SessionModule, UserModule, AuthModule, ProductModule, viewProductsModule, AuthViewModule, viewChatModule, WorkersModule, GatewayModule],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(productsMiddleware).forRoutes({ path: 'view/products', method: RequestMethod.GET });
    consumer.apply(authMiddleware).forRoutes({ path: 'view/auth/*', method: RequestMethod.GET });
  }
}
