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
  user = {};

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => {
      this.user = user;
    })
  }
}