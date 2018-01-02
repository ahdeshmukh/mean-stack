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
  newTasksCount = 0;
  inProgressTasksCount = 0;
  completedTasksCount = 0;

  constructor(private userService: UserService) {}
  
  ngOnInit() {
    this.userService.getCurrentUser().subscribe((user) => {
      this.firstName = user.getUserFirstName();
      this.lastName = user.getUserLastName();
      let user_id = user.getUserId();

      this.userService.getUserTaskCountByStatus(user_id).subscribe((tasks) => {//console.log(tasks);
        if(tasks.length) {
          let newTasksCount, inProgressTasksCount, completedTasksCount  = 0;
          _.forEach(tasks, function(value) {
            switch(value.task_name) {
              case 'new':
                newTasksCount = value.num_tasks;
                break;
              case 'in_progress':
                inProgressTasksCount = value.num_tasks;
                break;
              case 'complete':
                completedTasksCount = value.num_tasks;
                break;
              default:
                break;
            }
          });
          this.newTasksCount = newTasksCount;
          this.inProgressTasksCount = inProgressTasksCount;
          this.completedTasksCount = completedTasksCount;
          //console.log(this.newTasksCount);
        }
      }, (err) => {
        console.log(err);
      });
    });

  }

}