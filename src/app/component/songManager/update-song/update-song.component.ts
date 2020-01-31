import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../services/song/song.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.css']
})

export class UpdateSongComponent implements OnInit {
song: Song;
songForm: FormGroup;
  constructor(private songService: SongService,
              private route: Router,
              private routes: ActivatedRoute) {
    this.songForm = new FormGroup ({
      nameSong: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.songService.getSongById(id).subscribe(
          data => {
            this.song = data;
          },
          error => {
            this.song = null;
          }
      );
    });
  }
  updateSong() {
    console.log(this.song);
    this.songService.updateSong(this.song).subscribe(next => {
      alert('Bạn đã Sửa thành công bài hát');
      this.route.navigate(['/list-song']);
      console.log(next);
    }, error => {
      console.log(error),
          alert('Bạn chưa Sửa thành công');
    });
  }

}
