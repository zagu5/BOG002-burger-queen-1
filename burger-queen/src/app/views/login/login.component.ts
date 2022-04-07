import { auth } from '../../interfaces/users.interface';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { UserService } from 'src/app/services/users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  errorUser: string = '';

  constructor(private formBuilder:FormBuilder,
              private userService:UserService,
              private router: Router ) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]]
    });
  }


  authUser(params:auth) {
    // IR AL BACKEND
    this.userService.postAuth(params)
    .subscribe(resp => {

      if(resp === 'Valid password'){
        if(this.userService.auth.rol === 'admin'){
          this.router.navigateByUrl('home')
        }

        if(this.userService.auth.rol === 'cocinero'){
          this.router.navigateByUrl('cocinero')
        }

        if(this.userService.auth.rol === 'mesero'){
          this.router.navigateByUrl('mesero')
        }
      }
      else{
        this.errorUser = resp.error;
      }
    })
  }

  // FUNCTION DEL CLICK
  getLogin(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const value= this.form.value;
      this.authUser(value);
    }
    else{
      this.form.markAllAsTouched();
    }
  }

}
