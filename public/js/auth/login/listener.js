import { form_signup } from './index.js';
import { Login } from './utils.js';
export default () => {
  form_signup.addEventListener('submit', Login);
};
