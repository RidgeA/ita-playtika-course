import { AutoMap } from "@automapper/classes";
import { Transform } from "class-transformer";

export class ProductDto {
  @AutoMap()
  id: string;

  @AutoMap()
  category: string;

  @AutoMap()
  subcategory: string;

  @AutoMap()
  article?: string;

  @AutoMap()
  name: string;

  @AutoMap()
  @Transform(value => {value.value})
  price: number;

  @AutoMap()
  quantity: number;

  @AutoMap()
  manufacturer: string;

  @AutoMap()
  color?: string;
}
