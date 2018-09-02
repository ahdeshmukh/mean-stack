import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';

import { UserService } from '../../services/user/user.service';
import { AdToastrService } from '../../services/ad-toastr/ad.toastr.service';

@Component({
  selector: 'app-registration',
  templateUrl: './ad.registration.component.html',
  styleUrls: [],
  providers: [
    UserService,
    AdToastrService
  ]
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

  registrationInProgress = false;

  showLoginForm(showLoginForm: boolean) {
    this.onShowingLoginForm.emit(showLoginForm);
  }
    
  constructor(private fb: FormBuilder, private userService: UserService, private adToastr: AdToastrService) {
    this.rForm = fb.group({
      'firstName': [null, Validators.required],
      'lastName': [null, Validators.required],
      'email' : [null, Validators.required],
      'password' : [null, Validators.required],
      'confirmPassword' : [null, Validators.required]
    }, {
      
    });
  }

  register(user) {
    this.registrationInProgress = true;
    let errorMsg = 'Error in registering the user. Please try again.';
    this.userService.addUser(user).subscribe((result) => {
      if(!result || !result.success) {
        if(result.error && result.error.code && result.error.code == 11000) {
          errorMsg = 'Email is already in use. Register using a different email'
        }
        this.adToastr.error(errorMsg);
      } else {
        this.adToastr.success('Welcome ' + user.firstName + ' ' + user.lastName + '. Please log in using your new credentials');
        this.showLoginForm(true);
      }
      this.registrationInProgress = false;
    }, (error) => {
      this.adToastr.error(errorMsg);
      this.registrationInProgress = false;
    })
  }

}