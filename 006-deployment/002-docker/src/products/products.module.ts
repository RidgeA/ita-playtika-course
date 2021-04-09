import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config";
import { UuidmoduleModule } from "../uuidmodule/uuidmodule.module";
import { CreateProductProfile } from "./mapper/create-product.profile";
import { ProductProfile } from "./mapper/product.profile";
import { ProductsController } from './products.controller';
import { ProductsRepository } from "./products.repository";
import { ProductsService } from './products.service';
import { FiltersBuilder } from "./specification/specification";
import { FileStorage } from "./storage/file-storage";

@Module({
  imports: [ConfigModule.forRoot(), UuidmoduleModule],
  controllers: [ProductsController],
  providers: [
    ProductsRepository,
    ProductsService,
    FileStorage,

    FiltersBuilder,

    ProductProfile,
    CreateProductProfile,
  ]
})
export class ProductsModule {
}
