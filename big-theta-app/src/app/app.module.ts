import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module'
import { Ng2CompleterModule } from "ng2-completer";

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { ApiComponent } from './api/api.component';
import { GoogleLoginComponent } from './login/google-login/google-login.component';
import { FbLoginComponent } from './login/fb-login/fb-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    InfoComponent,
    ApiComponent,
    GoogleLoginComponent,
    FbLoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2CompleterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
