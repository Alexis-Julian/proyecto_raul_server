import { join } from 'path';
import { allowInsecurePrototypeAccess } from '@handlebars/allow-prototype-access';
import Handlebars from 'handlebars';
import * as hbs from 'express-handlebars';
export default (app: any) => {
  app.engine('handlebars', hbs.engine({ handlebars: allowInsecurePrototypeAccess(Handlebars) }));
  app.set('views', join(process.cwd() + '/views'));
  app.set('view engine', 'handlebars');
};
