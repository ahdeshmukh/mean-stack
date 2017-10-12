import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './ad.registration.component.html',
  styleUrls: [],
  providers: []
})

export class AdRegistrationComponent {
  @Input() showLoginLink: boolean;
  @Output() onShowingLoginForm = new EventEmitter<boolean>();

  rForm: FormGroup;
  post:any; // property for our submitted form
  firstName:string = '';
  lastName:string = '';
  email:string = '';
  password:string = '';
  confirmPassword:string = '';

  showLoginForm(showLoginForm: boolean) {
    this.onShowingLoginForm.emit(showLoginForm);
  }
    
  constructor(private fb: FormBuilder) {
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'confirmPassword' : [null, Validators.required]
    }, {
      
    });
  }

  register(registrationForm) {
    console.log(registrationForm)
  }

}