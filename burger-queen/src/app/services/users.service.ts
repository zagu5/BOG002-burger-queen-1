import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map, tap, of } from "rxjs";
import { auth, user } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  private baseUrl: string = environment.url;
  private authUser: user | undefined;

  get auth() {
    return {...this.authUser!}
  }
  constructor(private http: HttpClient){}

  // OBTENER UN USUARIO POR ID
  // getUserId(){
  //   const url = `${this.baseUrl}/users/1`;
  //   const headers = new HttpHeaders()
  //   .set('x-token', localStorage.getItem('token') || '')
  //   return this.http.get(url, {headers});
  // }

  // AUTENTICAR UN USUARIO
  postAuth(params:auth){
    const url = `${this.baseUrl}auth`;

    return this.http.post<any>(url, params)
    .pipe(
      tap( resp => {
        // GUARDAR TOKEN EN EL LOCALSOTRAGE
        localStorage.setItem('token', resp.token);
        sessionStorage.setItem('token', resp.token);
        console.log(resp.user, 'respTap')
        if(resp.user.email === params.email){
          localStorage.setItem('token', resp.token);
          this.authUser = {
            id : resp.user.id,
            username : resp.user.nombre,
            email: resp.user.email,
            rol: resp.user.roles,
            photo: resp.user.photo,
          }
        }
        console.log(this.authUser, 'authUser')
      }),
      map( resp => resp.message),
      catchError(err => of(err.error))
    )
  }

  // //VALIDAR TOKEN
  // validarToken(){
  //   const url = `${this.baseUrl}auth`;
  //   const headers = new HttpHeaders()
  //   .set('x-token', localStorage.getItem('token') || '')
  //   return this.http.get(url, {headers});
  // }


  //ADMIN CREAR UN USUARIO
  // postUser(){

  // }

}
