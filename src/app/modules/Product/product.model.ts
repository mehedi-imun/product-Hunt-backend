import mongoose, { Schema } from 'mongoose';
import { IProduct } from './product.interface';

const ProductSchema: Schema = new Schema<IProduct>(
  {
    productName: {
      type: String,
      required: [true, 'Please provide a product name'],
    },
    price: {
      type: Number,
      required: [true, 'Please provide a price'],
    },
    description: {
      type: String,
    },
    brand: {
      type: String,
      required: [true, 'Please provide a brand'],
    },
    category: {
      type: String,
      required: [true, 'Please provide a category'],
    },
    quantity: {
      type: Number,
      required: [true, 'Please provide a quantity'],
      default: 0,
    },
    rating: {
      type: Number,
      required: [true, 'Please provide a rating'],
      default: 0,
    },
    isAvailable: {
      type: Boolean,
      required: [true, 'Please provide a availability'],
      default: true,
    },
    imageUrl: {
      type: String,
      default: 'https://via.placeholder.com/150',
    },
  },
  {
    timestamps: true,
  },
);

export const Product = mongoose.model<IProduct>('Product', ProductSchema);
