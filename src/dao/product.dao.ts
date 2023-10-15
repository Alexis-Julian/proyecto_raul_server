import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Products } from 'src/schemas/product.model';
import { CreateProductDto } from 'src/api/product/dto/create-product.dto';
import { UpdateProductDto } from 'src/api/product/dto/update-product.dto';
import { PaginateModel } from 'mongoose';

@Injectable()
export class ProductDao {
  constructor(@InjectModel('Products') private productModel: PaginateModel<Products>) {}

  async findById(id: string): Promise<Products | null> {
    try {
      return await this.productModel.findById(id);
    } catch (err) {
      //console.log('Errror:' + err.message);
      return null;
    }
  }

  async findOne(query?: any): Promise<Products | null> {
    try {
      return await this.productModel.findOne(query && query);
    } catch (err) {
      console.log('Error:' + err.message);
      return null;
    }
  }

  async findByIdAndDelete(id: string): Promise<Products | null> {
    try {
      return await this.productModel.findByIdAndDelete(id);
    } catch (err) {
      console.log('Errror:' + err.message);
      return null;
    }
  }

  async findByIdAndUpdate(id: string, ObjectUpdateProduct: UpdateProductDto): Promise<Products | null> {
    try {
      return await this.productModel.findByIdAndUpdate(id, ObjectUpdateProduct);
    } catch (err) {
      console.log('Error:' + err.message);
    }
  }
  async create(ObjectProduct: CreateProductDto): Promise<Products | null> {
    try {
      return await this.productModel.create(ObjectProduct);
    } catch (err) {
      console.log('Error:' + err.message);
    }
  }

  async remove(id: string): Promise<Products | null> {
    try {
      return await this.productModel.findByIdAndDelete(id);
    } catch (err) {
      //console.log('Error:' + err.message);
    }
  }

  async findAll(page: number, limit: number) {
    try {
      const productFinds = await this.productModel.paginate({}, { page: page, limit: limit, populate: 'author.owner' });
      return productFinds;
    } catch (err) {
      console.log('Error:' + err.message);
    }
  }
}
