import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  login() { }

  logout() {
    localStorage.removeItem('bigThetaUser');
  }

}
