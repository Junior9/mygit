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
import { JavaComponent } from './page/documentation/java/java.component';
import { PhpComponent } from './page/documentation/php/php.component';
import { JavaCreateProjectComponent } from './page/documentation/java/session/java-create-project/java-create-project.component';
import { JavaSpringCrudComponent } from './page/documentation/java/session/java-spring-crud/java-spring-crud.component';
import { PhpLaravelCrudComponent } from './page/documentation/php/session/php-laravel-crud/php-laravel-crud.component';
import { PhpInstallComponent } from './page/documentation/php/session/php-install/php-install.component';
import { PhpCommandComponent } from './page/documentation/php/session/php-command/php-command.component';
import { AngularConfigurationComponent } from './page/documentation/angular7/session/angular-configuration/angular-configuration.component';
import { PhpConfigurationComponent } from './page/documentation/php/session/php-configuration/php-configuration.component';
import { AngularInstallComponent } from './page/documentation/angular7/session/angular-install/angular-install.component';
import { JavaSpringTestComponent } from './page/documentation/java/session/java-spring-test/java-spring-test.component';
import { NodeComponent } from './page/documentation/node/node.component';
import { NodeInstallComponent } from './page/documentation/node/session/node-install/node-install.component';
import { NodeCommandsComponent } from './page/documentation/node/session/node-commands/node-commands.component';
import { NodeConfigurationComponent } from './page/documentation/node/session/node-configuration/node-configuration.component';
import { NodeExpressComponent } from './page/documentation/node/session/node-express/node-express.component';
import { NodeBasicCrudComponent } from './page/documentation/node/session/node-basic-crud/node-basic-crud.component';
import { NodeTypeScriptComponent } from './page/documentation/node/session/node-type-script/node-type-script.component';
import { NodeTesteComponent } from './page/documentation/node/session/node-teste/node-teste.component';


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
    TableComponent,
    JavaComponent,
    PhpComponent,
    JavaCreateProjectComponent,
    JavaSpringCrudComponent,
    PhpLaravelCrudComponent,
    PhpInstallComponent,
    PhpCommandComponent,
    AngularConfigurationComponent,
    PhpConfigurationComponent,
    AngularInstallComponent,
    JavaSpringTestComponent,
    NodeComponent,    
    NodeInstallComponent, NodeCommandsComponent, NodeConfigurationComponent, NodeExpressComponent, NodeBasicCrudComponent, NodeTypeScriptComponent, NodeTesteComponent
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
