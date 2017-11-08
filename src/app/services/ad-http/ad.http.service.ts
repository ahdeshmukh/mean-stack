import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

import { UtilityService } from '../utility/utility.service';

@Injectable()
export class AdHttpService {

  constructor(private http: HttpClient, private _utilityService: UtilityService) { }

  get(endPoint): Observable<any> {
    let url = this._utilityService.getRestApi() + '/' + endPoint;
    return this.http.get(url);
  }

  post(endPoint, params): Observable<any> {
    let url = this._utilityService.getRestApi() + '/' + endPoint;
    let options = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post(url, params, options);
  }

}