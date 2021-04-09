import { IsInt, IsNumber, IsOptional, IsString, MaxLength } from "class-validator";

export class UpdateProductDto {

  id: string

  @IsString()
  @MaxLength(50)
  @IsOptional()
  category: string;

  @IsString()
  @MaxLength(50)
  @IsOptional()
  subcategory: string;

  @IsString()
  @IsOptional()
  article?: string;

  @IsString()
  @IsOptional()
  name: string;

  @IsNumber()
  @IsOptional()
  price: number;

  @IsInt()
  @IsOptional()
  quantity: number;

  @IsString()
  @IsOptional()
  manufacturer: string;

  @IsString()
  @IsOptional()
  @IsOptional()
  color?: string;
}
