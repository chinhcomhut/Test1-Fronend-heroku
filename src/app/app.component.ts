import {Component, OnInit} from '@angular/core';
import { TokenStorageService} from './auth/token-storage.service';
import {Song} from './model/song/song';
import {SongService} from './services/song/song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ngx-audio-player-demo';
 roles: string[];
 authority: string;
songList: Song[] = [];
info: any;
constructor(private tokenStorage: TokenStorageService,
            private songService: SongService) {
}
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.roles = this.tokenStorage.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        if ( role === 'ROLE_USER') {
          this.authority = 'user';
          return true;
        }
      });
    }
    this.info = {
      token: this.tokenStorage.getToken(),
      username: this.tokenStorage.getUsername(),
      avatar: this.tokenStorage.getAvatar(),
      authorities: this.tokenStorage.getAuthorities()
    };
    this.songService.getSong()
        .subscribe(next => {
          this.songList = next;
        }, error => {
          console.log(error);
        });
  }
  update(songs: Song[]) {
    this.songList = songs;
  }
}
