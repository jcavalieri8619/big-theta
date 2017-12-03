import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  appUser: any;
  constructor(
    private router:Router,
    private _userService:UserService,
    private _authService:AuthService
  ) {
    this.appUser = this._userService.getUser();
  }

  ngOnInit() {}

  logout() {
    this._authService.logout();
    window.location.href = "/login";
  }

}
