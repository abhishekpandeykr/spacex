import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
environment;

@Injectable({
  providedIn: 'root',
})
export class SpacexLaunchService {
  constructor(private _http: HttpClient) {}

  getAllLaunches(param?: string) {
    let url = environment.basePath + 'limit=100';
    if (param && param.length) {
      url = `${url}&${param}`;
    }
    return this._http.get(url);
  }
}
