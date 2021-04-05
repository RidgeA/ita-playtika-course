import { Controller, Get, Inject } from '@nestjs/common';
import { Product } from "./model/product.interface";
import { ProductsRepository } from "./products.repository";

@Controller('products')
export class ProductsController {

  constructor(private readonly repo: ProductsRepository) {

  }

  @Get()
  getProducts(): Promise<Product[]> {
    return this.repo.getAll();
  }
}
