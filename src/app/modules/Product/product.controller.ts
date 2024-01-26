import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ProductService } from './product.service';

const createProduct = catchAsync(async (req, res) => {
  const result = await ProductService.createProduct(req.body);

  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Product is created successfully',
    data: result,
  });
});

const findProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.findProductById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is retrieved successfully',
    data: result,
  });
});

const getAllProducts = catchAsync(async (req, res) => {
  const result = await ProductService.getAllProducts(req.query);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Products are retrieved successfully',
    meta : result.meta,
    data: result.data,
  });
});

const updateProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.updateProductById(id, req.body);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is updated successfully',
    data: result,
  });
});

const deleteProductById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const result = await ProductService.deleteProductById(id);

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Product is deleted successfully',
    data: result && null,
  });
});

export const ProductController = {
  createProduct,
  findProductById,
  getAllProducts,
  updateProductById,
  deleteProductById,
};
