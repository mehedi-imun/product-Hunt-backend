import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ProductController } from './product.controller';
import { updateProductValidationSchema } from './product.validation';

const router = express.Router();

router.post(
  '/',
  validateRequest(updateProductValidationSchema),
  ProductController.createProduct,
);

router.get('/', ProductController.getAllProducts);

router.get('/:id', ProductController.findProductById);

router.patch(
  '/:id',
  validateRequest(updateProductValidationSchema),
  ProductController.updateProductById,
);

router.delete('/:id', ProductController.deleteProductById);

export const ProductRoutes = router;
