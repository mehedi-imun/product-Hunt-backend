import QueryBuilder from '../../builder/QueryBuilder';
import { ProductSearchableFields } from './product.constants';
import { IProduct } from './product.interface';
import { Product } from './product.model';

const createProduct = async (product: IProduct) => {
  return await Product.create(product);
};

const findProductById = async (productId: string) => {
  return await Product.findById(productId);
};

const getAllProducts = async (query: Record<string, unknown>) => {
  const productQuery = new QueryBuilder(Product.find(), query)
    .search(ProductSearchableFields)
    .filter()
    .sort()
    .paginate()
    .fields();

  const result = await productQuery.modelQuery;
  const metaData = await productQuery.countTotal();
  return {
    data: result,
    meta: metaData,
  };
};

const updateProductById = async (
  productId: string,
  payload: Partial<IProduct>,
) => {
  const result = await Product.findByIdAndUpdate({ _id: productId }, payload, {
    new: true,
    runValidators: true,
  });
  return result;
};

const deleteProductById = async (productId: string) => {
  const result = await Product.findByIdAndDelete(productId);
  return result;
};

export const ProductService = {
  createProduct,
  findProductById,
  getAllProducts,
  updateProductById,
  deleteProductById,
};
