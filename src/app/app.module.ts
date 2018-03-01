import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {routing , appRoutingProviders} from './app.routing';
import {BrowserAnimationsModule}from '@angular/platform-browser/animations';


//componentes
import { AppComponent } from './app.component';

import { HomeComponent} from './components/home/home.component';

import { RegisterComponent} from './components/register/register.component';
import { LoginComponent} from './components/login/login.component';
import { UserEditComponent} from './components/user-edit/user-edit.component';
import { VotacionComponent} from '../app/admin/votacion';
//servicios
//import {UserService } from './services/user.service'; 
@NgModule({
  declarations: [
    AppComponent,
  
    HomeComponent,
  
    RegisterComponent,
    LoginComponent,
    UserEditComponent,
    VotacionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    BrowserAnimationsModule,
  
  
    

  ],
  providers: [
    appRoutingProviders,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
