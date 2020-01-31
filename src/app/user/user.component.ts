import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { TokenStorageService} from '../auth/token-storage.service';
import {Song} from '../model/song/song';
import {SongService} from '../services/song/song.service';
import {Track} from 'ngx-audio-player';
import {PlaylistInfor} from '../model/playlist/playlist-Infor';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PlaylistService} from '../services/playlistManager/playlist.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
    // songList: Song[] = [];
    // title: string;
    // sub: Subscription;
    // song: Song[];
    // msaapDisplayTitle = true;
    // msaapDisplayPlayList = true;
    // pageSizeOptions = [2, 4, 6];
    // msaapDisplayVolumeControls = true;
    // msbapDisplayTitle = false;
    // msbapDisplayVolumeControls = true;
    // playlist1: Track;
    // playlist2: Track[] = [];
    // msaapPlaylist2: Track[] = [];
    // // title = 'Chúc Các Bạn Nghe Nhạc Vui Vẻ';
    // playlist: PlaylistInfor;
  board: string;
  errorMessage: string;
info: any;
    // songList: Song[] = [];
  constructor(private userService: UserService,
              private token: TokenStorageService,
              private songService: SongService,
              private routes: ActivatedRoute,
              private playlistService: PlaylistService) { }

  ngOnInit() {
      // this.sub = this.routes.paramMap.subscribe((paramMap: ParamMap) => {
      //     const id = +paramMap.get('id');
      //     this.playlistService.getPlayListById(id).subscribe(
      //         next => {
      //             this.playlist = next;
      //             console.log(next);
      //             // this.title = next.title;
      //             this.song = next.songs;
      //             for (const song of this.song ) {
      //                 this.playlist1 = {
      //                     title: song.nameSong,
      //                     link: song.mp3Url
      //                 };
      //                 this.playlist2.push(this.playlist1);
      //             }
      //             this.msaapPlaylist2 = this.playlist2;
      //         },
      //         error => {
      //             this.playlist = null;
      //             console.log(error);
      //         }
      //     );
      // });
      this.userService.getUserBoard().subscribe(
        data => {
          this.board = data;
        },
        error => {
          this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`;
        }
    );
      this.info = {
          token: this.token.getToken(),
          username: this.token.getUsername(),
        avatar: this.token.getAvatar(),
          roles: this.token.getAuthorities()
      };
  }
    // changeMsbapDisplayTitle(event) {
    //     this.msbapDisplayTitle = event.checked;
    // }
    //
    // changeMsbapDisplayVolumeControls(event) {
    //     this.msbapDisplayVolumeControls = event.checked;
    // }
    //
    // changeMsaapDisplayTitle(event) {
    //     this.msaapDisplayTitle = event.checked;
    // }
    //
    // changeMsaapDisplayPlayList(event) {
    //     this.msaapDisplayPlayList = event.checked;
    // }
    //
    // changeMsaapDisplayVolumeControls(event) {
    //     this.msaapDisplayVolumeControls = event.checked;
    // }
    logout() {
        this.token.signOut();
        window.location.reload();
    }
    // update(songs: Song[]) {
    //     this.songList = songs;
    // }


}
