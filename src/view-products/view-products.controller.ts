import { Controller, Res, Get } from '@nestjs/common';
import { Response } from 'express';
import { ProductService } from 'src/api/product/product.service';

@Controller('view/products')
export class ViewProductsController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  async RenderProduct(@Res() res: Response) {
    const products = await this.productService.findAll();
    res.render('products', {
      data: products.docs,
    });
  }
}
