import { Injectable } from '@angular/core';
import {Song} from '../../model/song/song';
import {Observable} from 'rxjs';
import {AuthService} from '../../auth/auth.service';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SongService {
private readonly API_URL_CREATE = environment.URL + '/api/songs/creates';
  private readonly API_URL_GET = environment.URL + '/api/songs';
  private readonly API_URL_GET_ID = environment.URL + '/api/songs';
  private readonly API_URL_PUT = environment.URL + '/api/songs/update';
  private readonly API_URL_DELETE = environment.URL + '/api/songs/by';
  private likedSongByIdUrl = 'http://localhost:8080/api/songs/like';
  private likeSongUrl = 'http://localhost:8080/api/songs/toplike';
  private listSongUserId = 'http://localhost:8080/api/auth/listSongByUser';
  private listenSong = 'http://localhost:8080/api/songs/toplisten';
  private searchSong = 'http://localhost:8080/api/songs/search';

  constructor(private http: HttpClient, private authenService: AuthService) { }
  getSong(): Observable<any> {
    return this.http.get<any>(this.API_URL_GET);
  }
  getSongById(id: number): Observable<Song> {
    return this.http.get<Song>(`${this.API_URL_GET_ID}/${id}`);
  }
  createSong(song: Partial<Song>): Observable<Song> {
    return this.http.post<Song>(this.API_URL_CREATE, song);
  }

  updateSong(songs: Song): Observable<Song> {
    return this.http.put<Song>(`${this.API_URL_PUT}/${songs.id}`, songs);
  }

  deleteSong(id: number): Observable<Song> {
    return this.http.delete<Song>(`${this.API_URL_DELETE}/${id}`);
  }

  getLikeSongById(id: number): Observable<Song> {
    return this.http.get<Song>(`${this.likedSongByIdUrl}/${id}`);
  }

  getLikeSong(): Observable<Song[]> {
    return this.http.get<Song[]>(this.likeSongUrl);
  }

  getListenSong(): Observable<Song[]> {
    return this.http.get<Song[]>(this.listenSong);
  }

  getAllSongUserId(): Observable<any> {
    return this.http.get<any>(this.listSongUserId);
  }

  getSearchSong(nameSong: string): Observable<any> {
    return this.http.get<any>(`${this.searchSong}/${nameSong}`);
  }

  // getSongByUrl(mp3Url: string): Observable<Song> {
  //   return this.http.get<Song>(`${this.API_URL_GET}/findByUrl/${mp3Url}`);
  // }
}
