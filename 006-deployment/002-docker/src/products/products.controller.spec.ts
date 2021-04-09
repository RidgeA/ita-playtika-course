import { classes } from "@automapper/classes";
import { AutomapperModule } from "@automapper/nestjs";
import { Test, TestingModule } from '@nestjs/testing';
import { CreateProductProfile } from "./mapper/create-product.profile";
import { ProductProfile } from "./mapper/product.profile";
import { ProductsController } from './products.controller';
import { ProductsService } from "./products.service";
import { FiltersBuilder } from "./specification/specification";

describe('ProductsController', () => {
  let controller: ProductsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        AutomapperModule.forRoot({
          options: [{ name: '', pluginInitializer: classes }],
          singular: true
        })
      ],
      controllers: [
        ProductsController,
      ],
      providers: [
        {
          provide: ProductsService,
          useValue: {}
        },

        ProductProfile,
        CreateProductProfile,
        FiltersBuilder,
      ]
    }).compile();

    controller = module.get<ProductsController>(ProductsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
