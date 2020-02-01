import { Injectable } from '@angular/core';
// import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SingerInfo} from '../../model/singer/singer-info';
import {environment} from '../../../environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class SingerManagerService {
  // private readonly API_CREATE_SINGER = environment.URL + '/api/auth/create/singer';
  // private readonly API_GET_SINGER = environment.URL + '/api/auth/singer';
  // private readonly API_GET_SINGER_ID = environment.URL + '/api/auth/singer';
  // private readonly API_PUT_SINGER = environment.URL + '/api/singer/';
  // private readonly API_DELETE_SINGER = environment.URL + '/api/singers/delete';
  // private readonly API_GET_SINGER_BY_USER = environment.URL + '/api/auth/listSingerByUser';
  private svSingerUrl = environment.singerUrl;

  constructor(
      private http: HttpClient) {
  }

  getSinger(): Observable<any> {
    return this.http.get<any>(this.svSingerUrl);
  }

  getSingerById(id: number): Observable<SingerInfo> {
    return this.http.get<SingerInfo>(`${this.svSingerUrl}/${id}`);
  }

  createSinger(singer: Partial<SingerInfo>): Observable<SingerInfo> {
    return this.http.post<SingerInfo>(this.svSingerUrl, singer);
  }

  updateSinger(singer: Partial<SingerInfo>): Observable<SingerInfo> {
    return this.http.put<SingerInfo>(`${this.svSingerUrl}/${singer.id}`, singer);
  }

  deleteSinger(id: number): Observable<SingerInfo> {
    return this.http.delete<SingerInfo>(`${this.svSingerUrl}/${id}`);
  }

  getAllSingerUserId(): Observable<any> {
    return this.http.get<any>(this.svSingerUrl);
  }
}
