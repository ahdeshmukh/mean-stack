import { Component } from '@angular/core';

import { UserService } from '../../services/user/user.service';
import { AdTodosService } from './ad-todos.service'

@Component({
  selector: 'app-todos',
  templateUrl: './ad.todos.component.html',
  styleUrls: ['./ad.todos.component.css'],
  providers: [AdTodosService]
})

export class AdTodosComponent {
  firstName = '';
  lastName = '';
  showNewTaskForm:boolean = false;

  constructor(private userService: UserService,
              private adTodosService: AdTodosService
  ) {}
  
  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => {
      this.firstName = user.getUserFirstName();
      this.lastName = user.getUserLastName();
    });

    this.adTodosService.addNewTaskFormObs.subscribe((showAddNewTaskForm) => {
      this.showNewTaskForm = showAddNewTaskForm;
    });

  }

}