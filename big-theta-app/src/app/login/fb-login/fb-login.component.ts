import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Http, } from '@angular/http';

import { UserService } from '../../services/user.service';
declare var window: any;
declare var FB: any;

@Component({
  selector: 'app-fb-login',
  templateUrl: './fb-login.component.html',
  styleUrls: ['./fb-login.component.css']
})
export class FbLoginComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router, private http: Http) {
    // This function initializes the FB variable 
    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));

    window.fbAsyncInit = () => {
      FB.init({
        appId: '1541509175932297',
        autoLogAppEvents: true,
        xfbml: true,
        version: 'v2.10'
      });

      FB.AppEvents.logPageView();

      FB.Event.subscribe('auth.statusChange', (response => {
        if (response.status === 'connected') {
          let userCredentials = {'authResponse':'','userDetail':'','userType':'facebook'}
          userCredentials.authResponse = response.authResponse;
          FB.api(response.authResponse.userID,{fields: 'name, gender, link'}, function(response) {
            userCredentials.userDetail = response;            
          });
          this._userService.setUser(JSON.stringify(response));
          window.location.href = "/home";
        }
      }));
      
    };
  }

  ngOnInit() {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }

}
