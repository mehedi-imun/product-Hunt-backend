// product.validation.ts
import { z } from 'zod';

export const createProductValidationSchema = z.object({
  body: z.object({
    productName: z.string(),
    price: z.number().positive(),
    description: z.string(),
    brand: z.string(),
    category: z.string(),
    quantity: z.number().int(),
    rating: z.number().min(0).max(5),
    isAvailable: z.boolean(),
    imageUrl: z.string().url(),
  }),
});

export const updateProductValidationSchema = z.object({
  body: z.object({
    productName: z.string().optional(),
    price: z.number().positive().optional(),
    description: z.string().optional(),
    brand: z.string().optional(),
    category: z.string().optional(),
    quantity: z.number().int().positive().optional(),
    rating: z.number().min(0).max(5).optional(),
    isAvailable: z.boolean().optional(),
    imageUrl: z.string().url().optional(),
  }),
});

export const ProductValidations = {
  createProductValidationSchema,
  updateProductValidationSchema,
};
