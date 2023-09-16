import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import expressStaticConfig from './config/express-static-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  expressStaticConfig(app);

  await app.listen(3000);
}
bootstrap();
