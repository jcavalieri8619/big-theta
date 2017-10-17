import { Component, ElementRef, AfterViewInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../../services/user.service';
declare const gapi: any;

@Component({
  selector: 'app-google-login',
  templateUrl: './google-login.component.html',
  styleUrls: ['./google-login.component.css']
})
export class GoogleLoginComponent implements AfterViewInit {
  private clientId:string ='363247795181-teko9e6qg8sih971tkl1b68smonb1j79.apps.googleusercontent.com';
  private scope = [
    'profile',
    'email',
    'https://www.googleapis.com/auth/plus.me',
    'https://www.googleapis.com/auth/contacts.readonly',
    'https://www.googleapis.com/auth/admin.directory.user.readonly'
  ].join(' ');
  
  public auth2: any;
  public googleInit() {
    let that = this;
    gapi.load('auth2', function () {
      that.auth2 = gapi.auth2.init({
        client_id: that.clientId,
        cookiepolicy: 'single_host_origin',
        scope: that.scope
      });
      that.attachSignin(that.element.nativeElement.firstChild);
    });
  }
  
  public attachSignin(element) {
    let that = this;
    this.auth2.attachClickHandler(element, {},
      function (googleUser) {

        let profile = googleUser.getBasicProfile();

        let userCredentials = {'token': '', 'id': 0, 'name': '', 'image': '', 'email' :''}
        userCredentials.token = googleUser.getAuthResponse().id_token;
        userCredentials.id = profile.getId();
        userCredentials.name = profile.getName();
        userCredentials.image = profile.getImageUrl();
        userCredentials.email = profile.getEmail();

        that._userService.setUser(JSON.stringify(userCredentials));
        that.router.navigateByUrl('/home');

      }, function (error) {
        console.log(JSON.stringify(error, undefined, 2));
      });
  }

  constructor(
    private element: ElementRef,
    private _userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngAfterViewInit() {
    this.googleInit();
  }

}
