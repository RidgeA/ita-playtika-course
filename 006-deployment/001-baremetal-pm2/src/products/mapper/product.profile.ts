import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper, MappingProfile } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { ProductDto } from "../dto/product-dto";
import { Product } from "../model/product";

@Injectable()
export class ProductProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper)
  }

  mapProfile(): MappingProfile {
    return mapper => {
      mapper.createMap(Product, ProductDto)
    };
  }
}
