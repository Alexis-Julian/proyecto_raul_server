import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import expressStaticConfig from './config/express-static-config';
//import expressSession from './config/express-session-config';
import * as cookieParser from 'cookie-parser';
import swaggerDocsConfig from './config/swagger-docs-config';
import mongoSessionConfig from './config/mongo-session-config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  /* Auto-Validation */
  app.useGlobalPipes(new ValidationPipe());

  /* Configuracion de MongoStore */
  mongoSessionConfig(app);

  /* Documentacion */
  swaggerDocsConfig(app);

  /* Formateador de cookie */
  app.use(cookieParser());

  /*Configuraciones de los archivos estaticos  */
  expressStaticConfig(app);

  await app.listen(3000);
}

bootstrap();
