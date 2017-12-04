import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
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
import { MathElementComponent } from './math-element/math-element.component';
import { MathListComponent } from './math-list/math-list.component';
import { EquationRankComponent } from './equation-rank/equation-rank.component';
import { EquationSubjectComponent } from './equation-subject/equation-subject.component';
import {HttpClientModule} from '@angular/common/http';
import {MathDatabaseService} from './services/math-database/math-database.service';
import {WindowRefService} from './services/window-ref/window-ref.service';
import {GraphSearchService} from './services/graph-search.service';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { GraphComponent } from './graph/graph.component';
import { SubjectEquationsComponent } from './subject-equations/subject-equations.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SearchComponent,
    InfoComponent,
    ApiComponent,
    GoogleLoginComponent,
    FbLoginComponent,
    MathElementComponent,
    MathListComponent,
    EquationRankComponent,
    EquationSubjectComponent,
    GraphComponent,
    SubjectEquationsComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    Ng2CompleterModule,
    HttpClientModule,
    AppRoutingModule,
    MatProgressSpinnerModule,
    MatProgressBarModule
  ],
  providers: [
    MathDatabaseService,
    WindowRefService,
    GraphSearchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
