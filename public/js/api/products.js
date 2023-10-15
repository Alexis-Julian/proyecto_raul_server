class Products {
  constructor() {
    this.url = 'http://localhost:3000/api/products';
  }

  async getProducts() {
    const response = await fetch(this.url);
    if (response.status === 200) {
      const data = await response.json();
      return data;
    } else {
      return [];
    }
  }
}

export const ProductsManager = new Products();
