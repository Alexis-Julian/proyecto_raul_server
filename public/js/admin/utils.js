class Products {
  constructor() {
    this.url = 'http://localhost:3000/api/products';
  }

  async getProducts() {
    const response = await fetch(this.url);
    const data = await response.json();
    return data;
  }
}

export const ProductsManager = new Products();
