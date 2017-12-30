import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';

import { UtilityService } from '../../services/utility/utility.service';
import { AuthService } from '../../services/auth/auth.service';
import { AdHttpService } from '../../services/ad-http/ad.http.service';
import { AdToastrService } from '../../services/ad-toastr/ad.toastr.service';
import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './ad.login.component.html',
  styleUrls: ['./ad.login.component.css'],
  providers: [
    UtilityService,
    AuthService,
    AdHttpService,
    AdToastrService
  ]
})

export class AdLoginComponent {
  images_base_path = '';
  @Input() showRegisterLink: boolean;
  @Output() onShowingRegistrationForm = new EventEmitter<boolean>();

  rForm: FormGroup;
  post:any; // property for our submitted form
  password:string = '';
  email:string = '';

  showRegistrationForm(showRegistrationForm: boolean) {
    this.onShowingRegistrationForm.emit(showRegistrationForm);
  }
  
  constructor(private utilityService: UtilityService, 
              private fb: FormBuilder, 
              private authService: AuthService, 
              private adToastr: AdToastrService, 
              private userService: UserService,
              private router: Router
            ) {
    this.rForm = fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  login(loginForm) {
    this.password = loginForm.password;
    this.email = loginForm.email;
    this.authService.login(loginForm.email, loginForm.password)
    .subscribe(
      (result) => {
        if(!result.success) {
           this.adToastr.error('Invalid email or password. Please try again.');
        } else {
          this.adToastr.success('Logged in successfully. Welcome ' + result.data.first_name + ' ' + result.data.last_name);
          this.userService.isLoggedIn().subscribe(() => {
            this.router.navigateByUrl('todos');
          });
        }
      },
      (error) => {
        this.adToastr.error();
      }
    );
  }
  
  ngOnInit() {
    this.images_base_path = this.utilityService.getImagesBasePath();
  }

}