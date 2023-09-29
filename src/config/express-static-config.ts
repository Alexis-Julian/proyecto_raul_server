import { getBasePath } from 'src/projectUtils';
import { join } from 'path';
import { engine } from 'express-handlebars';

export default (app: any) => {
  app.use('handlebars', engine());
  app.useStaticAssets(join(getBasePath, '..', 'public'));
  app.setBaseViewsDir(join(getBasePath, '..', 'views'));
  app.setViewEngine('hbs');
};
