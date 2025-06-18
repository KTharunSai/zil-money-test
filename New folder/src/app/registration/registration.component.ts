import { Component } from '@angular/core';
import {FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.scss'
})
export class RegistrationComponent {
registration: FormGroup<any>;

constructor(private fb: FormBuilder) {
  this.registration = this.fb.group({
    fname: ['', Validators.required,Validators.max(5),Validators.min(5)],
    lName: ['', Validators.max(10)],
    age: ['', Validators.required,Validators.pattern("^(17|18|19|20)$")],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.pattern("^\d{10}$")],
    city: ['',Validators.required ],
    gender: ['', Validators.required],
    miltaryServiice :[''],
    password: ['', Validators.required,Validators.min(6)],
    cPassword: ['', Validators.required,this.passwordMatch()],

  });
}
  onSubbmit(){

  }
  passwordMatch(){

  }

}
