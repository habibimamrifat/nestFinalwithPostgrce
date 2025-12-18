import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  signUp() {
    return { message: ' i amk signUp method' };
  }
  signIn() {
    return { message: ' i am sign in method' };
  }
}
