import MongoStore = require('connect-mongo');
import * as session from 'express-session';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';

export default (app: INestApplication) => {
  app.use(
    session({
      store: MongoStore.create({
        mongoUrl: process.env.MONGO,
        ttl: 9999,
      }),
      secret: process.env.Cookie,
      resave: false,
      saveUninitialized: false,
    }),
  );
};
