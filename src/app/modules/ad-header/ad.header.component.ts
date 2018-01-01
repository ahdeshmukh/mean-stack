import { Component } from '@angular/core';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './ad.header.component.html',
  styleUrls: ['./ad.header.component.css'],
  providers: []
})

export class AdHeaderComponent {
  title = 'My Header';
  firstName = '';
  lastName = '';

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => {
      this.firstName = user.getUserFirstName();
      this.lastName = user.getUserLastName();
    });
  }

}