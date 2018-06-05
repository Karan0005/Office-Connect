import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable()
export class AccountService {

  constructor(private apiService: ApiService) { }

  public signUp(params) {
    const route: String = '/account/signUp';
  }

  public signIn(params) {
    const route: String = '/account/signIn';
  }

  public signOut(params) {
    const route: String = '/account/signOut';
  }

  public passwordReset(params) {
    const route: String = '/account/passwordReset';
  }

  public accountActivate(params) {
    const route: String = '/account/accountActivate';
  }

  public accountDeactivate(params) {
    const route: String = '/account/accountDeactivate';
  }

  public accountDelete(params) {
    const route: String = '/account/accountDelete';
  }

}
