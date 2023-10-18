import { ManagerAuth as AuthManager } from '../api/auth.js';

export const sign_out = async () => {
  const response = await AuthManager.AuthLogout();
  if (response.status == 202) {
    window.location.reload();
  } else {
    console.log(response);
  }
};
