import { Controller, Render, Get } from '@nestjs/common';
import { ProductService } from '../../api/product/product.service';
@Controller('view/products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  @Render('products')
  async viewProducts() {
    const products = await this.productService.findAll(1, 12);
    return { productss: products.docs, layout: 'home' };
  }
}
