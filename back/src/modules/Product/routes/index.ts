import { Router } from 'express';

import ProductController from '../controllers';

export default class PostRoutes {
  private readonly _router: Router;
  private readonly _controller: ProductController;

  constructor() {
    this._router = Router();
    this._controller = new ProductController();
    this.initializeRoutes();
  }

  get router() {
    return this._router;
  }

  private initializeRoutes() {
    this.router.get('/products', (req, res) => this._controller.getProducts(req, res));
    this.router.get('/products/:id', (req, res) => this._controller.getProduct(req, res));
    this.router.post('/create/product', (req, res) => this._controller.createProduct(req, res));
  }
}
