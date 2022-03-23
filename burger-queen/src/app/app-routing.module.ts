import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocineroComponent } from './views/cocinero/cocinero.component';
import { HomeComponent } from './views/home/home.component';
import { MeseroComponent } from './views/mesero/mesero.component';
import { RegisterComponent } from './components/register/register.component';

const routes: Routes = [
  {path: '**', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path:'register', component:RegisterComponent},
  {path: 'mesero', component: MeseroComponent},
  {path: 'cocinero', component: CocineroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
