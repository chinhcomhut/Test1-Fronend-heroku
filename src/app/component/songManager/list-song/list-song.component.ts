import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../services/song/song.service';
import {Track} from 'ngx-audio-player';

@Component({
  selector: 'app-list-song',
  templateUrl: './list-song.component.html',
  styleUrls: ['./list-song.component.css']
})

export class ListSongComponent implements OnInit {

    songList: Song[] = [];
    delete: Song;
    title = 'Danh Sách Bài Hát';

    constructor(private songService: SongService) {
    }

    ngOnInit() {
        // const userId = sessionStorage.getItem('AuthUserId');
        this.songService.getAllSongUserId()
            .subscribe(next => {
                this.songList = next.data;
                console.log(this.songList);
            }, error => {
                console.log(error);
            });
    }

    deleteSong(id: number) {
        this.songService
            .deleteSong(id)
            .subscribe(
                data => {
                    this.delete = data;
                    window.location.reload();
                },
                error => {
                    this.delete = null;
                }
            );
    }
}
