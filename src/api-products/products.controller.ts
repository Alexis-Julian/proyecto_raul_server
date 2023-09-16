import {
  Body,
  Controller,
  Param,
  Get,
  Post,
  Put,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/products.dto';

@Controller('api/products')
export class ProductsController {
  constructor(private productService: ProductsService) {}
  @Get()
  getProducts() {
    return this.productService.getProducts();
  }

  @Get(':pid')
  getProductById(@Param('pid') pid: string) {
    return pid;
  }

  @Post()
  addProduct(@Body() newProduct: CreateProductDto) {
    console.log(newProduct);
    return this.productService.addProduct();
  }

  @Put()
  updateProduct() {
    return '2';
  }

  @Delete()
  deleteProduct() {
    return '3';
  }
}
