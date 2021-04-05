import { Test, TestingModule } from "@nestjs/testing";
import { ProductsController } from "./products.controller";

describe("", () => {
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsController],
    }).compile();
  })
})
