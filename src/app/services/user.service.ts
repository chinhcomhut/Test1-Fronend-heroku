import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {UpdateInfo} from '../model/userManager/UpdateInfo';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'https://musicfullbackend.herokuapp.com/api/test/user';
  private pmUrl = 'https://musicfullbackend.herokuapp.com/api/test/pm';
  private adminUrl = 'https://musicfullbackend.herokuapp.com/api/test/admin';
  private updateUserUrl = 'https://musicfullbackend.herokuapp.com/api/auth/updateuser';
  private getUserUrl = 'https://musicfullbackend.herokuapp.com/api/auth/user';
  constructor(private http: HttpClient) { }

  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  getUpdateUser(username: string): Observable<UpdateInfo> {
    return this.http.get<UpdateInfo>(`${this.updateUserUrl}/${username}`);
  }
  getUser(username: string): Observable<UpdateInfo> {
    return this.http.get<UpdateInfo>(`${this.getUserUrl}/${username}`);
  }
}
