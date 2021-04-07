import { InjectMapper } from "@automapper/nestjs";
import { Mapper } from "@automapper/types";
import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Query } from '@nestjs/common';
import { CreateProductDto } from "./dto/create-product-dto";
import { FilterProductsDto } from "./dto/filter-products-dto";
import { ProductDto } from "./dto/product-dto";
import { UpdateProductDto } from "./dto/update-product-dto";
import { Product } from "./model/product";
import { ProductsService } from "./products.service";
import { FiltersBuilder } from "./specification/specification";

@Controller('products')
export class ProductsController {

  constructor(private readonly service: ProductsService,
              @InjectMapper() private readonly mapper: Mapper,
              private readonly filtersBuilder: FiltersBuilder) {
  }

  @Get()
  async getAll(@Query() filterParams: FilterProductsDto): Promise<ProductDto[]> {
    const filters = this.filtersBuilder.build(filterParams)
    return this.service.getFiltered(filters);
  }

  @Get("/:id")
  async getById(@Param("id") id: string): Promise<ProductDto> {
    return this.service.getById(id);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() create: CreateProductDto): Promise<ProductDto> {
    let product = this.mapper.map(create, Product, CreateProductDto)
    product = await this.service.create(product)
    return this.mapper.map(product, ProductDto, Product)
  }

  @Put("/:id")
  async update(@Body() update: UpdateProductDto): Promise<ProductDto> {
    return null
  }

  @Delete("/:id")
  @HttpCode(HttpStatus.NO_CONTENT)
  async delete(@Param("id") id: string): Promise<void> {
  }
}
