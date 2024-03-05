import { Application } from 'express';

import { productRoutes } from './modules/Product';

export default class Routes {
  static init(app: Application) {
    app.use('/', productRoutes);
  }
}
