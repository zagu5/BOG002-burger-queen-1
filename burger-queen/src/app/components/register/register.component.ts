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
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    mesero: new FormControl('', Validators.required),
    cocinero: new FormControl('', Validators.required),
  });

  ngOnInit(): void {
  }

  getformRegister(event: Event) {
    event.preventDefault();
    console.log(this.formRegister.value)
  }

}
