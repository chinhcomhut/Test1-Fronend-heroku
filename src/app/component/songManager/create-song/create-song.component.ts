import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {Song} from '../../../model/song/song';
import {ActivatedRoute, Router} from '@angular/router';
import {SongService} from '../../../services/song/song.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {SingerInfo} from '../../../model/singer/singer-info';
import {SingerManagerService} from '../../../services/singerManager/singer-manager.service';
// @ts-ignore
import any = jasmine.any;
import {SignUpInfo} from '../../../auth/signup-info';
import {error} from 'ng-packagr/lib/util/log';


@Component({
  selector: 'app-create-song',
  templateUrl: './create-song.component.html',
  styleUrls: ['./create-song.component.css']
})
export class CreateSongComponent implements OnInit {

  title = 'Thêm Bài Hát Mới';
  info: any;
  songForm: FormGroup;

  song: Partial<Song>;
  avatarUrl: string;
  singerList: SingerInfo[];
  songList: Song[] = [];

  constructor(private router: Router,
              private service: SongService,
              private tokenService: TokenStorageService,
              private singerService: SingerManagerService,
              private route: ActivatedRoute,
              public fb: FormBuilder) {
    this.songForm = new FormGroup({
    });
    this.song = {
      nameSong: '',
      singerId: '',
    };
  }
  // private validateForm() {
  //    this.fb.group({
  //     nameSong: [''],
  //   });
  // }

  getSinger() {
    this.singerService.getSinger().subscribe(
      result => {
        this.singerList = result;
        console.log(this.singerList);
        // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        alert('error get listSinger');
      }
    );
  }
  createSong() {
    // @ts-ignore
    this.service.createSong(this.song).subscribe(
      result => {
        this.song = result;
        console.log(this.song);
        alert('tao bai hat thanh cong!');
        // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        alert('error khong tao duoc Song');
      }
    );
  }


changeSinger(e) {
 this.song.singerId = e;
  }
ngOnInit() {
    this.getSinger();
}

onChange($event) {
    this.song.mp3Url = $event;
  }

onAvatar($event) {
    this.song.avatarUrl = $event;
  }

}
