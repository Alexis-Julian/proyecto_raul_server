/* Funcionalidades */
import { Module, MiddlewareConsumer, NestModule, RequestMethod } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

/* MiddleWares */
import verifyAuth from './middlewares/productMiddlewares';
import authMiddleware from './middlewares/authMiddleware';
/* App.Modulos */
import { SessionModule } from './api/session/session.module';
import { UserModule } from './api/user/user.module';
import { AuthModule } from './api/auth/auth.module';
import { ProductModule } from './api/product/product.module';
import { ProductsModule as viewProductsModule } from './views/products/products.module';
import { ChatModule as viewChatModule } from './views/chat/chat.module';
import { FriendsModule as viewFriendModule } from './views/friends/friends.module';
import { AuthViewModule } from './views/auth-view/auth-view.module';
import { WorkersModule } from './api/workers/workers.module';
import { GatewayModule } from './gateway/gateway.module';
import { FriendsModule } from './api/friends/friends.module';
import { ChatModule } from './api/chat/chat.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO),
    ProductModule,
    SessionModule,
    UserModule,
    AuthModule,
    ProductModule,
    AuthViewModule,
    WorkersModule,
    GatewayModule,
    FriendsModule,
    ChatModule,
    viewChatModule,
    viewProductsModule,
    viewFriendModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(verifyAuth).forRoutes({ path: 'view/products', method: RequestMethod.GET });
    consumer.apply(authMiddleware).forRoutes({ path: 'view/auth/*', method: RequestMethod.GET });
    consumer.apply(verifyAuth).forRoutes({ path: 'api/friends', method: RequestMethod.ALL });
  }
}
