import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Player} from "../../model/player";

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
private API_PLAYER = 'http://localhost:8080/api/player';
  constructor(private httpClient: HttpClient) { }
  getPlayer(id: string): Observable<Player> {
    return this.httpClient.get<Player>(`${this.API_PLAYER}/${id}`);
  }
  getListPlayer(): Observable<Player[]> {
    return this.httpClient.get<Player[]>('http://localhost:8080/api/player/list');
  }
}
