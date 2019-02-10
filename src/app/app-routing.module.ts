import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './page/home/home.component'
import {Angular7Component}from './page/documentation/angular7/angular7.component';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';

const routes: Routes = [
	{path:'home',component:HomeComponent},
	{path:'documentation/angular7',component:Angular7Component},
	{path:'',component:HomeComponent},	
	{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
