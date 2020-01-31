import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Song} from '../../../model/song/song';
import {FormControl, FormGroup} from '@angular/forms';
import {SongService} from '../../../services/song/song.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  songs: Song[];
  name: string[] = [];
  searchForm: FormGroup;
  filteredSong: Song[];
  @Output()
  press = new EventEmitter<Song[]>();

  searchBy: string;


  constructor(private songService: SongService) {
    this.searchForm = new FormGroup({
      key: new FormControl(''),
      // singer: new FormControl('')
    });
    this.searchBy = 'song';
  }

  ngOnInit() {
    this.songService.getSong()
        .subscribe(next => {
          this.songs = next;
          this.name = this.name.filter((value, i, self) => self.indexOf(value) === i);
        });
  }

  filter() {
    if (this.searchBy === 'song') {
      if (this.searchForm.valid) {
        const form = this.searchForm.value;
        const isEmptyForm = !form.key;
        this.filteredSong = this.songs;
        if (!isEmptyForm) {
          if (form.key) {
            this.filteredSong = this.filteredSong.filter((song => song.nameSong.includes(form.key)));
          }
        } else {
          this.filteredSong = this.songs;
        }
        this.press.emit(this.filteredSong);
      }
    }
    if (this.searchBy === 'singer') {
      if (this.searchForm.valid) {
        const form = this.searchForm.value;
        const isEmptyForm = !form.key;
        this.filteredSong = this.songs;
        if (!isEmptyForm) {
          if (form.key) {
            this.filteredSong = this.filteredSong.filter((song => song.singer.includes(form.key)));
          }
        } else {
          this.filteredSong = this.songs;
        }
        this.press.emit(this.filteredSong);
      }
    }
  }

  unFilter() {
    location.reload();
  }

}
