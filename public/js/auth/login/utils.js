import { ManagerAuth } from '../../api/auth.js';
import { loading } from './index.js';

export async function Login(e) {
  e.preventDefault();
  const email = e.target['email'].value;
  const password = e.target['password'].value;

  loading.classList.remove('hidden');

  const Auth = await ManagerAuth.AuthLogin({ email, password });
  console.log(Auth);
  if (Auth.status === 202) {
    window.location.href = '../products';
  } else if (Auth.status == 403) {
    //Password incorrect
    alertify.error('Password incorrect');
  } else if (Auth.status == 404) {
    alertify.error('User not found');
    //User not found
  }

  loading.classList.add('hidden');
}
