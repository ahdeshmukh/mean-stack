import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './ad.login.component.html',
  styleUrls: ['./ad.login.component.css'],
  providers: [UtilityService]
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
  
  constructor(private _utilityService: UtilityService, private fb: FormBuilder) {
    this.rForm = fb.group({
      'email' : [null, Validators.required],
      'password' : [null, Validators.required]
    });
  }

  addPost(post) {console.log(post);
    this.password = post.password;
    this.email = post.email;
  }
  
  ngOnInit() {
    this.images_base_path = this._utilityService.getImagesBasePath();
  }

}