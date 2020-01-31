import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {PlaylistInfor} from '../../../model/playlist/playlist-Infor';
import {PlaylistService} from '../../../services/playlistManager/playlist.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-playlist',
  templateUrl: './update-playlist.component.html',
  styleUrls: ['./update-playlist.component.css']
})
export class UpdatePlaylistComponent implements OnInit {

  playListForm: FormGroup;
  playlist: PlaylistInfor;

  constructor(private playlistService: PlaylistService,
              private routes: ActivatedRoute,
              private router: Router) {
    this.playListForm = new FormGroup({
      playlistName: new FormControl('', [Validators.required]),
    });

    // this.playlist = {
    //   id: 0,
    //   playlistName: '',
    //   songs: Song[''],
    //   users: SignUpInfo[''],
    // };
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.playlistService.getPlayListById(id).subscribe(
          data => {
            this.playlist = data;
          },
          error => {
            this.playlist = null;
          }
      );
    });
  }

  updatePlaylist() {
    console.log(this.playlist);
    this.playlistService.updatePlayList(this.playlist).subscribe(next => {
      alert('Bạn đã Sửa thành công Playlist');
      this.router.navigate(['/list-playlist']);
      console.log(next);
    }, error => {
      console.log(error),
          alert('Bạn chưa Sửa thành công');
    });
  }
}
