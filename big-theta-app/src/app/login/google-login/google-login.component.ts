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
    'email'
  ].join(' ');
  
  public auth2: any;
  public googleInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: this.clientId,
        cookiepolicy: 'single_host_origin',
        scope: this.scope
      });
      this.attachSignin(this.element.nativeElement.firstChild);
    });
  }
  
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      googleUser => {

        let profile = googleUser.getBasicProfile();

        let userCredentials = {'token': '', 'id': 0, 'name': '', 'image': '', 'email' :''}
        userCredentials.token = googleUser.getAuthResponse().id_token;
        userCredentials.id = profile.getId();
        userCredentials.name = profile.getName();
        userCredentials.image = profile.getImageUrl();
        userCredentials.email = profile.getEmail();

        this._userService.setUser(JSON.stringify(userCredentials));
        this.router.navigateByUrl('/home');

      }, error => {
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
