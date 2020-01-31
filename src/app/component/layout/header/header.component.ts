import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song/song';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {SongService} from '../../../services/song/song.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private roles: string[];
  protected authority: string;
  info: any;
  songList: Song[] = [];

  constructor(
      private token: TokenStorageService,
      private songService: SongService,
      private router: Router) {}

  ngOnInit() {
    if (this.token.getToken()) {
      this.roles = this.token.getAuthorities();
      this.roles.every(role => {
        if (role === 'ROLE_ADMIN') {
          this.authority = 'admin';
          return false;
        } else if (role === 'ROLE_PM') {
          this.authority = 'pm';
          return false;
        }
        this.authority = 'user';
        return true;
      });
    }
    this.info = {
      token: this.token.getToken(),
      username: this.token.getUsername(),
      authorities: this.token.getAuthorities()
    };
  }

  logout() {
    this.token.signOut();
    window.location.reload();
    this.router.navigate(['/home']);
  }

  update(songs: Song[]) {
    this.songList = songs;
  }
}
