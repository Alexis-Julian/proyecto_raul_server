import { table } from './index.js';
import { ProductsManager } from '../api/products.js';
import { userManager } from '../api/users.js';
import { viewProducts, viewLoading, viewTableHeaders, viewTableUser } from './view.js';

const create_dashboard_Product = () => {
  const className = ['p-3', 'grid', 'grid-cols-3', 'gap-5'];
  const dashboard_products = document.createElement('div');
  dashboard_products.classList.add(...className);
  dashboard_products.innerHTML = '';
  return dashboard_products;
};

const create_dashboard_Users = () => {
  const classList = ['relative', 'overflow-x-auto', 'shadow-md', 'sm:rounded-lg', 'header_user'];
  const dashboard_users = document.createElement('div');
  dashboard_users.classList.add(...classList);
  dashboard_users.innerHTML = viewTableHeaders();
  return dashboard_users;
};

const create_row_Users = (user) => {
  const info_user = document.createElement('tr');

  info_user.classList.add('row_user');
  info_user.innerHTML = viewTableUser(user);

  return info_user;
};

export const ShowProducts = async () => {
  clearTable();
  const dashboard_products = create_dashboard_Product();
  table.append(dashboard_products);

  const loading = document.createElement('div');

  loading.innerHTML = viewLoading();
  dashboard_products.append(loading);
  let data = await ProductsManager.getProducts();
  loading.remove();

  //await new Promise((resolve) => setTimeout(resolve, 12000));

  data.docs.map((product) => {
    dashboard_products.innerHTML += viewProducts(product);
  });
};

export const ShowUsers = async () => {
  clearTable();

  const dashboard_users = create_dashboard_Users(); // Crea la tabla para los usuarios
  table.append(dashboard_users);

  const container_user = document.getElementById('container_user'); // Accede a la etiqueta donde va colocar todos los usuarios

  const users = await userManager.getUsers(8, 15);

  users.docs.map((user) => {
    container_user.append(create_row_Users(user));
  });
};

export const HiddenNavBar = () => {};

export const clearTable = () => {
  const classList = ['absolute', 'bg-primary-color', 'h-full', 'w-full', 'top-0', 'blur-z-40', 'opacity-20'];
  const div = document.createElement('div');
  div.classList.add(...classList);
  table.innerHTML = '';
  table.append(div);
};
