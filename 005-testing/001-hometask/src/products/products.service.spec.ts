import { Test, TestingModule } from '@nestjs/testing';
import { UuidmoduleModule } from "../uuidmodule/uuidmodule.module";
import { Product } from "./model/product";
import { ProductsRepository } from "./products.repository";
import { ProductsService } from './products.service';
import { FiltersBuilder } from "./specification/specification";

describe('ProductsService', () => {
  let service: ProductsService;
  let filtersBuilder: FiltersBuilder;
  let repository: ProductsRepository;

  const allProducts: Product[] = [
    {
      "id": "c7f87f68-d18c-4924-a336-d03ecca41138",
      "category": "category",
      "subcategory": "subcategory",
      "article": "article",
      "name": "name",
      "price": 3000,
      "quantity": 12,
      "manufacturer": "manufacturer 2"
    },
    {
      "id": "c7f87f68-d18c-4924-a336-d03ecca41138",
      "category": "category",
      "subcategory": "subcategory",
      "article": "article",
      "name": "name",
      "price": 1000,
      "quantity": 12,
      "manufacturer": "manufacturer 2"
    },
    {
      "id": "c7f87f68-d18c-4924-a336-d03ecca41138",
      "category": "category",
      "subcategory": "subcategory",
      "article": "article",
      "name": "name",
      "price": 2000,
      "quantity": 12,
      "manufacturer": "manufacturer 2"
    }
  ];

  beforeAll(async () => {
    filtersBuilder = new FiltersBuilder();
  })
  //
  // afterAll(async() => {})
  //
  beforeEach(async () => {
    repository = {} as ProductsRepository;

    const module: TestingModule = await Test.createTestingModule({
      imports: [UuidmoduleModule],
      providers: [
        ProductsService,
        {
          provide: ProductsRepository,
          useValue: repository,
        }
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getFiltered', () => {

    it('should return a list of products', async () => {

      repository.getAll = jest.fn().mockResolvedValue(allProducts)

      const filters = filtersBuilder.build({})

      const products = await service.getFiltered(filters)

      expect(products).toBeInstanceOf(Array)
    });

    it.each`
         a    | b    | expected
        ${1} | ${1} | ${2}
        ${2} | ${2} | ${4}
    `('should $a + $b = $expected', ({ a, b, expected }) => {
      expect(a + b).toBe(expected)
    })

    it.each([
      [1, 1, 2],
      [2, 2, 4]
    ])('should %i + %i = %i', (a, b, expected) => {
      expect(a + b).toBe(expected)
    })

  })
});
