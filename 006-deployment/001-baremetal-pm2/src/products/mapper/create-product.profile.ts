import { ignore } from "@automapper/core";
import { AutomapperProfile, InjectMapper } from "@automapper/nestjs";
import { Mapper, MappingProfile } from "@automapper/types";
import { Injectable } from "@nestjs/common";
import { CreateProductDto } from "../dto/create-product-dto";
import { Product } from "../model/product";

@Injectable()
export class CreateProductProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper)
  }

  mapProfile(): MappingProfile {
    return mapper => {
      mapper.createMap(CreateProductDto, Product)
        .forMember((product) => product.id, ignore())
    };
  }
}
