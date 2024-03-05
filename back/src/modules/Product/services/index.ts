import type { IProduct } from '../models';
import ProductModel from '../models';

interface IProductService {
  getProducts(page: number, limit: number): any;
  getProduct(string): any;
  createProduct(IPost): any;
}

export default class ProductService implements IProductService {
  private readonly _model;

  constructor() {
    this._model = ProductModel;
  }

  public async getProducts(page = 1, limit = 12) {
    const list = await this._model
      .find()
      .skip((page - 1) * limit)
      .limit(limit);
    const count = await this._model.countDocuments();
    return { list, count };
  }
  public async getProduct(id: string) {
    if (!id) {
      throw new Error('не указан ID');
    }
    return await this._model.findOne({ _id: id });
  }

  public async createProduct(product: IProduct) {
    return await this._model.create(product);
  }
}
