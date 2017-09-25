import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './ad.registration.component.html',
  styleUrls: [],
  providers: []
})

export class AdRegistrationComponent {
  @Input() showLoginLink: boolean;
  @Output() onShowingLoginForm = new EventEmitter<boolean>();

  showLoginForm(showLoginForm: boolean) {
    this.onShowingLoginForm.emit(showLoginForm);
  }
    
    constructor() {}
}