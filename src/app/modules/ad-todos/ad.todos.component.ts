import { Component } from '@angular/core';
import * as _ from 'lodash';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-todos',
  templateUrl: './ad.todos.component.html',
  styleUrls: [],
  providers: []
})

export class AdTodosComponent {
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