import { ProductsManager } from './utils.js';
import { viewProducts, viewLoading } from './view.js';

//await new Promise((resolve) => setTimeout(resolve, 12000));
const dashboard_products = document.getElementById('dashboard_user');

export const ListProducts = async () => {
  const loading = document.createElement('div');
  loading.innerHTML = viewLoading();
  dashboard_products.append(loading);
  //await new Promise((resolve) => setTimeout(resolve, 12000));

  let data = await ProductsManager.getProducts();

  loading.remove();

  /*   let images = data.docs.map((image) => {
    return image.thumbnails;
  }); */

  /*  const adasd = () => {
    console.log(images);
    images.forEach((image, index) => {
      const imagen = new Image();
      imagen.src = image;
      imagen.addEventListener('load', () => {
        console.log('Se cargo esta imagen: ', image, index);
      });
    });
  };
  adasd(); */
  data.docs.map((product) => {
    dashboard_products.innerHTML += viewProducts(product);
  });
};
