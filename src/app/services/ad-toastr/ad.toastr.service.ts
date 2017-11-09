import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable()
export class AdToastrService {

  constructor(private toastr: ToastrService) { }

  success(message?: string, title?: string, data?) {
    let toastrTitle = (title) ? title : 'Success';
    let toastrMessage = message;
    this.toastr.success(toastrMessage, toastrTitle, data);
  }

  error(message?: string, title?: string, data?) {
    let toastrTitle = (title) ? title : 'Error';
    let toastrMessage = (message) ? message : 'Something went wrong';
    this.toastr.error(toastrMessage, toastrTitle, data);
  }

}
