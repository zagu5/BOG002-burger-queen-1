import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MeseroComponent } from './views/mesero/mesero.component';
import { CocineroComponent } from './views/cocinero/cocinero.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './components/register/register.component';

import { UserService } from './services/users.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeseroComponent,
    CocineroComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
