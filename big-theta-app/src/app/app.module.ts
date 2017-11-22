import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing/app-routing.module'

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { InfoComponent } from './info/info.component';
import { ApiComponent } from './api/api.component';
import { GoogleLoginComponent } from './login/google-login/google-login.component';
import { MathElementComponent } from './math-element/math-element.component';
import { MathListComponent } from './math-list/math-list.component';
import { EquationRankComponent } from './equation-rank/equation-rank.component';
import { EquationSubjectComponent } from './equation-subject/equation-subject.component';
import {HttpClientModule} from '@angular/common/http';
import {MathDatabaseService} from './services/math-database/math-database.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    InfoComponent,
    ApiComponent,
    GoogleLoginComponent,
    MathElementComponent,
    MathListComponent,
    EquationRankComponent,
    EquationSubjectComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [MathDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
