import { Injectable } from '@angular/core';

@Injectable()
export class UserService {

  constructor() { }

  createUser() { }
  
  setUser(userData:any) {
    localStorage.setItem('bigThetaUser', userData);
  }
  
  getUser() {
    return JSON.parse(localStorage.getItem('bigThetaUser'));
  }

}
