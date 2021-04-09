import { AutoMap } from "@automapper/classes";
import { ApiProperty } from "@nestjs/swagger";
import { IsInt, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";


export class CreateProductDto {

  @IsString()
  @MaxLength(50)
  @AutoMap()
  @ApiProperty()
  category: string;

  @IsString()
  @MaxLength(50)
  @AutoMap()
  subcategory: string;

  @IsString()
  @IsOptional()
  @AutoMap()
  article?: string;

  @IsString()
  @AutoMap()
  name: string;

  @IsNumber()
  @AutoMap()
  price: number;

  @IsInt()
  @AutoMap()
  quantity: number;

  @IsString()
  @AutoMap()
  manufacturer: string;

  @IsString()
  @IsOptional()
  @AutoMap()
  color?: string;
}
