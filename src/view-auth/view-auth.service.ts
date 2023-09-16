import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewAuthService {
  ViewLogin() {
    return 'Login';
  }

  ViewRegister() {
    return 'Register';
  }

  ViewRecover() {
    return 'Recover';
  }
}
