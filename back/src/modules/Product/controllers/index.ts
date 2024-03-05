import { Request, Response } from 'express';

import ProductService from '../services';

interface IProductController {
  getProducts(Request, Response): any;
  getProduct(Request, Response): any;
  createProduct(Request, Response): any;
}

export default class ProductController implements IProductController {
  private readonly _service: ProductService;

  constructor() {
    this._service = new ProductService();
  }

  public async getProducts(req: Request, res: Response) {
    try {
      const { page = 1, limit = 12 } = req.query;
      const posts = await this._service.getProducts(+page, +limit);
      return res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
  public async getProduct(req: Request, res: Response) {
    try {
      const post = await this._service.getProduct(req.params.id);
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  public async createProduct(req: Request, res: Response) {
    try {
      const post = await this._service.createProduct(req.body);
      return res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
