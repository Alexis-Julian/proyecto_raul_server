import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthViewService {
  AuthRender() {
    return 'auth';
  }
}
