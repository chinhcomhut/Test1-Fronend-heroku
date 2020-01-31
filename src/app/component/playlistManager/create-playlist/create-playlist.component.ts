import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PlaylistInfor} from "../../../model/playlist/playlist-Infor";
import {AuthService} from "../../../auth/auth.service";
import {Router} from "@angular/router";
import {PlaylistService} from "../../../services/playlistManager/playlist.service";

@Component({
  selector: 'app-create-playlist',
  templateUrl: './create-playlist.component.html',
  styleUrls: ['./create-playlist.component.css']
})
export class CreatePlaylistComponent implements OnInit {

  title = 'Tạo PLaylist Mới';

  playlistForm: FormGroup;
  playlist: Partial<PlaylistInfor>;

  constructor(private auth: AuthService,
              private router: Router,
              private playlistService: PlaylistService) {
    this.playlistForm = new FormGroup({
      playlistName: new FormControl(''),
      avatarPlaylist: new FormControl('')
    });
    this.playlist = {
      playlistName: '',
      avatarPlaylist: ''
    };
  }
  ngOnInit() {
  }

  onAvatar($event: string) {
    this.playlist.avatarPlaylist = $event;
  }

  createPlaylist() {
    console.log(this.playlist);
    this.playlistService.createPlaylist(this.playlist).subscribe(() => {
      alert('Create playlist success!')
      this.router.navigate(['/list-playlist']);
    }, error => console.log(error));
  }
}
