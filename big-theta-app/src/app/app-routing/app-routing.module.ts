import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from '../search/search.component';
import { InfoComponent } from '../info/info.component';
import { ApiComponent } from '../api/api.component';

import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: SearchComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'info',
    component: InfoComponent
  },
  {
    path: 'api',
    component: ApiComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  providers: [
    UserService,
    AuthService
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
