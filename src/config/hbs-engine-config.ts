import { join } from 'path';

import * as hbs from 'express-handlebars';
export default (app: any) => {
  app.engine('handlebars', hbs.engine());
  app.set('views', join(process.cwd() + '/views'));
  app.set('view engine', 'handlebars');
};
