/* Elementos HTML */
import { btn_user } from './index.js';

/* Funciones */
import { ShowProducts } from './utils.js'; //Muesta todos los productos en pantalla

export default () => {
  btn_user.addEventListener('click', ShowProducts);
};
