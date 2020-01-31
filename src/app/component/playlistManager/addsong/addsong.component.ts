import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../services/song/song.service';
import {PlaylistService} from '../../../services/playlistManager/playlist.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PlaylistInfor} from '../../../model/playlist/playlist-Infor';

@Component({
  selector: 'app-addsong',
  templateUrl: './addsong.component.html',
  styleUrls: ['./addsong.component.css']
})
export class AddsongComponent implements OnInit {

  songList: Song[] = [];
  playlist: PlaylistInfor;
  id: number;
  title: 'Mời Bạn Chọn Bài Hát';

  constructor(private songService: SongService,
              private playlistService: PlaylistService,
              private routes: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit() {

    this.routes.paramMap.subscribe(paramMap => {
      console.log(paramMap + 'chinh')
      this.id = +paramMap.get('id');
      this.playlistService.getPlayListById(this.id).subscribe(
          data => {
            this.playlist = data;
          },
          error => {
            this.playlist = null;
          }
      );
    });

    this.songService.getSong()
        .subscribe(next => {
          this.songList = next;
          console.log(next);
        }, error => {
          console.log(error);
        });
  }

  update(songs: Song[]) {
    this.songList = songs;
  }

  addSongtoPlayList(song: Song) {
    this.playlist.songs.push(song);
    const url = '/my-playlist/' + this.id;
    this.playlistService.updatePlayList(this.playlist).subscribe(next => {
      this.router.navigate([url]);
    });
  }
}
