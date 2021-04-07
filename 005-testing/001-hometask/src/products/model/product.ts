import { AutoMap } from "@automapper/classes";

export class Product {
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
  price: number;

  @AutoMap()
  quantity: number;

  @AutoMap()
  manufacturer: string;

  @AutoMap()
  color?: string;
}
