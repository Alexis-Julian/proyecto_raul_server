import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts() {
    return 'Services';
  }
  getProductById(id: string) {
    console.log(id);
    return 'GetProductById';
  }
  addProduct() {
    return 'addProduct';
  }
  updateProduct() {
    return 'updateProduct';
  }
  findProduct() {
    return 'findProduct';
  }
  deleteProduct() {
    return 'deleteProduct';
  }
}
