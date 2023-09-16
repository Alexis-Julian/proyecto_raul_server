import { getBasePath } from 'src/projectUtils';
import { join } from 'path';

export default (app: any) => {
  app.useStaticAssets(join(getBasePath, '..', 'public'));
  app.setBaseViewsDir(join(getBasePath, '..', 'views'));
  app.setViewEngine('hbs');
};
