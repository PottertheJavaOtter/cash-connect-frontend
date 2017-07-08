import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: 'login.component.html',
  styles: ['img { margin: 10px }']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required ],
      password: ['', Validators.required ]
    })
  }

  login() {
    console.log(this.loginForm.value);
  }

}
