import { Component, OnInit } from '@angular/core';
import {SongService} from '../../../services/song/song.service';
import {Song} from '../../../model/song/song';

@Component({
  selector: 'app-all-list-song',
  templateUrl: './all-list-song.component.html',
  styleUrls: ['./all-list-song.component.css']
})
export class AllListSongComponent implements OnInit {

  songList: Song[] = [];

  constructor(private songService: SongService) {
  }

  ngOnInit() {
    this.songService.getSong()
        .subscribe(next => {
          this.songList = next;
          console.log(next);
        }, error => {
          console.log(error);
        });
  }


}
