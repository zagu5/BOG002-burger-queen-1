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
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './views/menu/menu.component';
import { PedidosComponent } from './views/pedidos/pedidos.component';
import { HistoricosComponent } from './views/historicos/historicos.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { PedidosListosComponent } from './views/pedidos-listos/pedidos-listos.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MeseroComponent,
    CocineroComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    MenuComponent,
    PedidosComponent,
    HistoricosComponent,
    PerfilComponent,
    PedidosListosComponent,
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
