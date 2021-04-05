import { Inject, Injectable } from "@nestjs/common";
import { Product } from "./model/product.interface";
import { STORAGE_DI_TOKEN } from "./products.module";

import { Storage } from "./storage/storage.interface";

@Injectable()
export class ProductsRepository {
  private products: Product[] = [];

  constructor(@Inject(STORAGE_DI_TOKEN) private readonly storage: Storage) {
  }

  async getAll(): Promise<Product[]> {
    await this.loadIfCacheEmpty()

    return this.products
  }

  async getById(id: string): Promise<Product> {
    await this.loadIfCacheEmpty();

    return this.products.find(product => product.id === id);
  }

  async create(product: Product): Promise<void> {
    this.products.push(product)
    await this.flush();
  }

  async update(product: Product): Promise<void> {
    const idx = this.products.findIndex(p => p.id === product.id)
    if (idx === -1) {
      throw new Error(`no product with id ${product.id}`)
    }
    const existingProduct = this.products[idx];
    this.products.splice(idx, 1, {
      ...existingProduct,
      ...product,
      id: existingProduct.id
    });

    await this.flush();
  }

  async delete(id: string): Promise<void> {
    const idx = this.products.findIndex(p => p.id === id)
    if (idx !== -1) {
      this.products.splice(idx, 1)
      await this.flush();
    }
  }

  async loadIfCacheEmpty(): Promise<void> {
    if (this.products.length === 0) {
      await this.loadFromStorage();
    }
  }

  async loadFromStorage(): Promise<void> {
    this.products = await this.storage.get();
  }

  async flush(): Promise<void> {
    await this.storage.store(this.products);
  }

}
