import { Injectable, HttpException } from '@nestjs/common';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductDao } from '../../dao/product.dao';
import { CreateProductDto } from './dto/create-product.dto';

interface ProductPaginate {
  docs: [];
}

@Injectable()
export class ProductService {
  constructor(private readonly ProductDao: ProductDao) {}
  async create(ObjectProductNew: CreateProductDto) {
    return await this.ProductDao.create(ObjectProductNew);
  }

  async findAll(): Promise<ProductPaginate | any> {
    const productFind = await this.ProductDao.findAll();

    if (!productFind) return new HttpException('NO_EXISTING_PRODUCT', 404);

    return productFind;
  }

  async findOne(id: string) {
    const productFind = await this.ProductDao.findById(id);

    if (!productFind) return new HttpException('PRODUCT_NOT_FOUND', 404);

    return productFind;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productFind = await this.ProductDao.findByIdAndUpdate(id, updateProductDto);

    return productFind;
  }

  async findById(id: string) {
    const productFind = await this.ProductDao.findById(id);

    if (!productFind) return new HttpException('PRODUCT_NOT_FOUND', 404);

    return productFind;
  }

  async remove(id: string) {
    return await this.ProductDao.remove(id);
  }
}
