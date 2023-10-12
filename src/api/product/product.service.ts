/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
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
    const productCreate = await this.ProductDao.create(ObjectProductNew);

    if (!productCreate) throw new HttpException('REPEAT_FIELD', HttpStatus.CONFLICT);

    return productCreate;
  }

  async findAll(): Promise<ProductPaginate | any> {
    const productFind = await this.ProductDao.findAll();

    if (!productFind) throw new HttpException('NO_EXISTING_PRODUCT', HttpStatus.NOT_FOUND);

    return productFind;
  }

  async findOne(id: string) {
    const productFind = await this.ProductDao.findById(id);

    if (!productFind) throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.NOT_FOUND);

    return productFind;
  }

  async update(id: string, updateProductDto: UpdateProductDto) {
    const productFind = await this.ProductDao.findByIdAndUpdate(id, updateProductDto);

    if (!productFind) throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.NOT_FOUND);

    return productFind;
  }

  async findById(id: string) {
    const productFind = await this.ProductDao.findById(id);

    if (!productFind) throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.NOT_FOUND);

    return productFind;
  }

  async remove(id: string) {
    const productDelete = await this.ProductDao.remove(id);

    if (!productDelete) throw new HttpException('PRODUCT_NOT_FOUND', HttpStatus.NOT_FOUND);

    return productDelete;
  }
}
