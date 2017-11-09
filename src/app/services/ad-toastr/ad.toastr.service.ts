import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdToastrService {

  constructor(private toastr: ToastrService) { }

  success(message?: string, title?: string, data?) {
    if (!title) {
      let title = 'Success';
    }
    this.toastr.success(message, title, data);
  }

  error(message?: string, title?: string, data?) {
    if (!title) {
      let title = 'Error';
    }
    if (!message) {
      let message = 'Something went wrong.';
    }
    this.toastr.error(message, title, data);
  }

}
