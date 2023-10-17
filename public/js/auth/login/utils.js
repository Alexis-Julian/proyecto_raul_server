import { ManagerAuth } from '../../api/auth.js';
export async function Login(e) {
  e.preventDefault();
  const email = e.target['email'].value;
  const password = e.target['password'].value;
  const Auth = await ManagerAuth.AuthLogin({ email, password });
  if (Auth.status === 202) {
    window.location.href = '../products';
  } else if (Auth.status == 404) {
    //Password incorrect
  } else if (Auth.status == 403) {
    //User not found
  }
}
