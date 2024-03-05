import { model, Schema } from 'mongoose';

export interface IProduct {
  model: string;
  releaseYear: number;
  category: string;
  retailPrice: number;
  addedDate: string;
  visible: boolean;
}

class ProductModel {
  static createModel() {
    return model<IProduct>(
      'product',
      new Schema({
        model: { type: String, required: true },
        releaseYear: { type: Number, required: true },
        category: { type: String, required: true },
        retailPrice: { type: Number, required: true },
        addedDate: { type: String, required: true },
        visible: { type: Boolean, required: true }
      })
    );
  }
}

const productModel = ProductModel.createModel();

export default productModel;
