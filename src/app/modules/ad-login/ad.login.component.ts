import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, EmailValidator } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { UtilityService } from '../../services/utility/utility.service';
import { AuthService } from '../../services/auth/auth.service';
import { AdHttpService } from '../../services/ad-http/ad.http.service';

@Component({
  selector: 'app-login',
  templateUrl: './ad.login.component.html',
  styleUrls: ['./ad.login.component.css'],
  providers: [
    ToastrService,
    UtilityService,
    AuthService,
    AdHttpService
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
    //console.log(this.rForm);
    this.onShowingRegistrationForm.emit(showRegistrationForm);
  }
  
  constructor(private _utilityService: UtilityService, private fb: FormBuilder, private _authService: AuthService, private toastr: ToastrService) {
    this.rForm = fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  login(loginForm) {
    this.password = loginForm.password;
    this.email = loginForm.email;
    this._authService.login(loginForm.email, loginForm.password)
    .subscribe(
      (res) => {console.log(res);this.toastr.success('Hello world!', 'Toastr fun!');},
      (err) => {console.log(err)}
    );
  }
  
  ngOnInit() {
    this.images_base_path = this._utilityService.getImagesBasePath();
  }

}