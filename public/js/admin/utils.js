import { dashboard_products, navBar } from './index.js';
import { ProductsManager } from '../api/products.js';
import { viewProducts, viewLoading } from './view.js';

export const ShowProducts = async () => {
  dashboard_products.innerHTML = '';
  const loading = document.createElement('div');

  loading.innerHTML = viewLoading();
  dashboard_products.append(loading);

  //await new Promise((resolve) => setTimeout(resolve, 12000));

  let data = await ProductsManager.getProducts();

  loading.remove();

  data.docs.map((product) => {
    dashboard_products.innerHTML += viewProducts(product);
  });
};

export const ShowUsers = async () => {
  dashboard_products.innerHTML = '';
};

export const HiddenNavBar = () => {};
