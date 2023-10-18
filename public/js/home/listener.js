import { btn_sign_out } from './index.js';
import { sign_out } from './utils.js';

export default () => {
  btn_sign_out.addEventListener('click', sign_out);
};
