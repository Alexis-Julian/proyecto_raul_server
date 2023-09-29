import { IsOptional, IsString, IsNumber } from 'class-validator';
export class UpdateProductDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsOptional()
  @IsNumber()
  price?: number;

  @IsOptional()
  @IsNumber()
  stock?: number;

  @IsOptional()
  @IsString()
  status?: boolean;

  @IsOptional()
  @IsString()
  category?: string;
}
