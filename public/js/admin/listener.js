/* Elementos HTML */
import { btn_products, btn_user, btn_navbar } from './index.js';

/* Funciones */
import { ShowProducts, ShowUsers, HiddenNavBar } from './utils.js'; //Muesta todos los productos en pantalla

export default () => {
  /* Botones globales */
  btn_navbar.addEventListener('click', HiddenNavBar);
  btn_products.addEventListener('click', ShowProducts);
  btn_user.addEventListener('click', ShowUsers);

  /* Botones DashBoard Usuarios */
};
