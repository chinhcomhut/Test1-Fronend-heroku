import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { JwtResponse } from './jwt-response';
import { AuthLoginInfo } from './login-info';
import { SignUpInfo } from './signup-info';
import {UpdateInfo} from '../model/userManager/UpdateInfo';
import {ChangePassword} from '../model/userManager/ChangePassword';
import {environment} from '../../environments/environment.prod';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private loginUrl = 'https://backendmp3.herokuapp.com/api/auth/signin';
  // private signupUrl = 'https://backendmp3.herokuapp.com/api/auth/signup';
  // private updateProfileUrl = 'https://backendmp3.herokuapp.com/api/auth/updateuser';
  // private changePassUrl = 'https://backendmp3.herokuapp.com/api/auth/changePassword';
  private svLoginUrl = environment.loginUrl;
private svSignUpUrl = environment.signupUrl;
private svUpdateProfileUrl = environment.updateProfileUrl;
private svChangePassUrl = environment.changePassUrl;
  constructor(private http: HttpClient) {
  }

  attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
    return this.http.post<JwtResponse>(this.svLoginUrl, credentials, httpOptions);
  }
  loggined() {
    const token = sessionStorage.getItem(TOKEN_KEY);
    const username = sessionStorage.getItem(USERNAME_KEY);
    const authority = sessionStorage.getItem(AUTHORITIES_KEY);
    if (username && token && authority) {
      return true;
    }
    return false;
  }
  signUp(info: SignUpInfo): Observable<string> {
    return this.http.post<string>(this.svSignUpUrl, info, httpOptions);
  }
  updateAuth(info: UpdateInfo): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.svUpdateProfileUrl, info, httpOptions);
  }

  changePasswordAuth(info: ChangePassword): Observable<JwtResponse> {
    return this.http.put<JwtResponse>(this.svChangePassUrl, info, httpOptions);
  }
}
