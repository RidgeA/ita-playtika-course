import { Injectable } from '@nestjs/common';
import { UuidV4Service } from "../uuidmodule/uuid/uuid.service";
import { Product } from "./model/product";
import { ProductsRepository } from "./products.repository";
import { Specification } from "./specification/specification";

@Injectable()
export class ProductsService {

  constructor(
    private readonly repo: ProductsRepository,
    private readonly uuid: UuidV4Service,
  ) {
  }

  async getFiltered(filter: Specification<Product>): Promise<Product[]> {
    const all = await this.repo.getAll()
    return all.filter(filter)
  }

  async getById(id: string): Promise<Product> {
    return null
  }

  async create(product: Product): Promise<Product> {
    product.id = this.uuid.get()
    await this.repo.create(product)
    return product
  }

  async update(product: Product): Promise<Product> {
    return null
  }

  async delete(id: string): Promise<void> {
    return null
  }
}
