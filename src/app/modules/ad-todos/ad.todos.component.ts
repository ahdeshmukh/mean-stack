import { Component } from '@angular/core';

import { UserService } from '../../services/user/user.service';
import { AdTodosService } from './ad-todos.service'

@Component({
  selector: 'app-todos',
  templateUrl: './ad.todos.component.html',
  styleUrls: [],
  providers: [AdTodosService]
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