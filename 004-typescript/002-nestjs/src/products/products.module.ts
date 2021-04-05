import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { ProductsController } from './products.controller';
import { ProductsRepository } from "./products.repository";
import { FileStorage } from "./storage/file-storage";

export const STORAGE_DI_TOKEN = Symbol('')

@Module({
  controllers: [ProductsController],
  imports: [ConfigModule.forRoot()],
  providers: [
    ProductsRepository,
    FileStorage,
  ]
})
export class ProductsModule {
}
