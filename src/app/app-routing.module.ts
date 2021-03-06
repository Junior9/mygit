import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './page/home/home.component'
import {Angular7Component}from './page/documentation/angular7/angular7.component';
import {JavaComponent}from './page/documentation/java/java.component';
import {PhpComponent}from './page/documentation/php/php.component';
import {NodeComponent} from './page/documentation/node/node.component';
import {PageNotFoundComponent} from './page/page-not-found/page-not-found.component';

const routes: Routes = [
	{path:'home',component:HomeComponent},
	{path:'documentation/angular7',component:Angular7Component},
	{path:'documentation/java',component:JavaComponent},
	{path:'documentation/php',component:PhpComponent},
	{path:'documentation/node',component:NodeComponent},
	{path:'',component:HomeComponent},	
	{path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
