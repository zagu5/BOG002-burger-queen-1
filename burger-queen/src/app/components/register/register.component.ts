import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  formRegister = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(10)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]),
    mesero: new FormControl('', Validators.required),
    cocinero: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  // getformRegister(event: Event) {
  //   event.preventDefault();
  //   console.log(this.formRegister.value)
  // }
  getRegister(event:Event){
    event.preventDefault();
    if(this.formRegister.valid){
      const valor= this.formRegister.value;
      console.log(valor);
    }
      else{
        this.formRegister.markAllAsTouched();
      }
    }
  

}
