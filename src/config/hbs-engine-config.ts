import { getBasePath } from 'src/projectUtils';
import { join } from 'path';
import * as hbs from 'express-handlebars';

export default (app: any) => {
  app.engine('handlebars', hbs.engine());
  app.set('views', join(getBasePath, '..', '/views'));
  app.set('view engine', 'handlebars');
};
