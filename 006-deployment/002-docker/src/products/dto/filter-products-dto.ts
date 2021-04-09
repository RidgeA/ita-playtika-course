import { Transform } from "class-transformer";
import { IsNumber, IsOptional, IsString, Min } from "class-validator";

export class FilterProductsDto {
  @IsOptional()
  @IsString()
  category?: string;

  @IsOptional()
  @IsString()
  name?: string;

  @Transform(v => parseFloat(v.value))
  @IsOptional()
  @IsNumber()
  @Min(0)
  priceFrom?: number;

  @Transform(v => parseFloat(v.value))
  @IsOptional()
  @IsNumber()
  @Min(0)
  priceTo?: number;
}
