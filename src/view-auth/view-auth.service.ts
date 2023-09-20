import { Injectable } from '@nestjs/common';

@Injectable()
export class ViewAuthService {
  ViewLogin() {
    return 'login';
  }

  ViewRegister() {
    return 'register';
  }

  ViewRecover() {
    return 'index';
  }
}
