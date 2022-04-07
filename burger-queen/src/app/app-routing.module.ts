import { AuthGuard } from '../app/guards/auth.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocineroComponent } from './views/cocinero/cocinero.component';
import { HomeComponent } from './views/home/home.component';
import { MeseroComponent } from './views/mesero/mesero.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [

  {path: '', component: LoginComponent},

  {
    path: 'home', component: HomeComponent,
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },

  {
    path:'register', component:RegisterComponent,
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },

  {
    path: 'mesero', component: MeseroComponent,
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },

  {
    path: 'cocinero', component: CocineroComponent,
    canLoad: [ AuthGuard ],
    canActivate: [ AuthGuard ]
  },

  {path: '**', redirectTo:''},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
