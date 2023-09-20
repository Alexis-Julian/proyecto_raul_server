import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import expressStaticConfig from './config/express-static-config';
//import expressSession from './config/express-session-config';
import * as session from 'express-session';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });

  /* Auto-Validation */
  app.useGlobalPipes(new ValidationPipe());

  app.use(
    session({
      secret: process.env.Cookie,
      resave: false,
      saveUninitialized: false,
    }),
  );
  /* Formateador de cookie */
  app.use(cookieParser());

  /*Configuraciones de los archivos estaticos  */
  expressStaticConfig(app);

  /* Session-Express */

  await app.listen(3000);
}
bootstrap();
