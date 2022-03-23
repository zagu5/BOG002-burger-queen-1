import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(){
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(10), Validators.minLength(7)]]
    });
  }

  getLogin(event:Event){
    event.preventDefault();
    if(this.form.valid){
      const value= this.form.value;
      console.log(value);
    }
    else{
      this.form.markAllAsTouched();
    }
  }

}
