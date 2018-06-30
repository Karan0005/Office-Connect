import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Observable } from 'rxjs/Observable';
import { ResModel } from '../../models/baseResModel';

@Injectable()
export class AccountService {

  constructor(private apiService: ApiService) { }

  public signUp(params): Observable<ResModel> {
    const route: String = '/account/signUp';
    return this.apiService.post(route, params);
  }

  public signIn(params): Observable<ResModel> {
    const route: String = '/account/signIn';
    return this.apiService.post(route, params);
  }

  public signOut(params): Observable<ResModel> {
    const route: String = '/account/signOut';
    return this.apiService.get(route, params);
  }

  public passwordReset(params): Observable<ResModel> {
    const route: String = '/account/passwordReset';
    return this.apiService.put(route, params);
  }

  public accountActivate(params): Observable<ResModel> {
    const route: String = '/account/accountActivate';
    return this.apiService.put(route, params);
  }

  public accountDeactivate(params): Observable<ResModel> {
    const route: String = '/account/accountDeactivate';
    return this.apiService.put(route, params);
  }

  public accountDelete(params): Observable<ResModel> {
    const route: String = '/account/accountDelete';
    return this.apiService.delete(route, params);
  }

}
