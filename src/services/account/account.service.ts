import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class AccountService {

  constructor(private apiService: ApiService) { }

  public signUp(params) {
    const route: String = '/account/signUp';
    this.apiService.post(route, params).subscribe(response => {
      console.log(response);
    });
  }

  public signIn(params) {
    const route: String = '/account/signIn';
    this.apiService.post(route, params).subscribe(response => {
      console.log(response);
    });
  }

  public signOut(params) {
    const route: String = '/account/signOut';
    this.apiService.get(route, params).subscribe(response => {
      console.log(response);
    });
  }

  public passwordReset(params) {
    const route: String = '/account/passwordReset';
    this.apiService.put(route, params).subscribe(response => {
      console.log(response);
    });
  }

  public accountActivate(params) {
    const route: String = '/account/accountActivate';
    this.apiService.put(route, params).subscribe(response => {
      console.log(response);
    });
  }

  public accountDeactivate(params) {
    const route: String = '/account/accountDeactivate';
    this.apiService.put(route, params).subscribe(response => {
      console.log(response);
    });
  }

  public accountDelete(params) {
    const route: String = '/account/accountDelete';
    this.apiService.delete(route, params).subscribe(response => {
      console.log(response);
    });
  }

}
