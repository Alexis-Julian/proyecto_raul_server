import { Controller, Render, Get, Req } from '@nestjs/common';
import { Products } from 'src/schemas/product.model';

import { ProductService } from '../../api/product/product.service';

interface Productos extends Products {
  docs: Array<Products>;
}

@Controller('view/products')
export class ProductsController {
  constructor(private readonly productService: ProductService) {}
  @Get()
  @Render('products')
  async viewProducts(@Req() req: any) {
    const products: Productos = await this.productService.findAll(1, 12);
    return { productss: products.docs, user: req.session.user, layout: 'home' };
  }
}
