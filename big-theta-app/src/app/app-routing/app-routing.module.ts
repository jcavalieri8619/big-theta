import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';

import { HomeComponent } from '../home/home.component';
import { LoginComponent } from '../login/login.component';
import { SearchComponent } from '../search/search.component';
import { InfoComponent } from '../info/info.component';
import { ApiComponent } from '../api/api.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: SearchComponent,
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: InfoComponent,
        pathMatch: 'full'
      },
      {
        path: 'api',
        component: ApiComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
