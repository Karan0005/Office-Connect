import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { ResModel } from '../../models/base-models/base-res-model';

const headerOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable()
export class ApiService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {

  }

  get(route, params): Observable<ResModel> {
    const options = {};
    const requestUrl = this.apiUrl + route;
    return this.http.get<ResModel>(requestUrl, options);
  }

  post(route, params): Observable<ResModel> {
    const options = {};
    const requestUrl = this.apiUrl + route;
    return this.http.post<ResModel>(requestUrl, options);
  }

  put(route, params): Observable<ResModel> {
    const options = {};
    const requestUrl = this.apiUrl + route;
    return this.http.put<ResModel>(requestUrl, options);
  }

  delete(route, params): Observable<ResModel> {
    const options = {};
    const requestUrl = this.apiUrl + route;
    return this.http.delete<ResModel>(requestUrl, options);
  }

}
