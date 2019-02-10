import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Angular7Component } from './page/documentation/angular7/angular7.component';
import { HomeComponent } from './page/home/home.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { FooterComponent } from './template/footer/footer.component';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';
import {AngularProjetoComponent} from './page/documentation/angular7/session/angular-projeto/angular-projeto.component';
import { AngularCrudComponent } from './page/documentation/angular7/session/angular-crud/angular-crud.component';
import { FormComponent } from './template/form/form.component';
import { TableComponent } from './template/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    Angular7Component,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    PageNotFoundComponent,
    AngularProjetoComponent,
    AngularCrudComponent,
    FormComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
