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

  songForm: FormGroup;
  song: Partial<Song>;
  singer: Partial<SingerInfo>
  singerList: SingerInfo[] = [];
  avatarUrl: string;

  constructor(private router: Router,
              private service: SongService,
              private singerService: SingerManagerService,
              private tokenService: TokenStorageService,
              public fb: FormBuilder) {
    this.songForm = new FormGroup({
      avatarUrl: new FormControl(''),
      category: new FormControl(''),
      nameSong: new FormControl(''),
      lyrics: new FormControl(''),
      singerId: new FormControl(''),
      mp3Url: new FormControl(''),
      describes: new FormControl('')
    });
    this.song = {
      avatarUrl: '',
      nameSong: '',
      category: '',
      singerId: '',
      lyrics: '',
      mp3Url: '',
      describes: '',
    };
    // this.singer = {
    //   id: '',
    // };
    // this.songForm = fb.group({
    //   avatarUrl: [''],
    //   nameSong: ['']
    // });
  }

  ngOnInit() {
    this.singerService.getSinger().subscribe(
      result => {
        this.singerList = result;
      }, error0 => {
        alert('error get manage-singer');
      }
    );
  }
  onChangeSinger($event) {
    this.song.singerId = this.singer.id = $event;
  }
  onChange($event) {
    this.song.mp3Url = $event;
  }

  onAvatar($event) {
    this.song.avatarUrl = $event;
  }

  createSong() {
    console.log(this.songForm);
    this.service.createSong(this.song).subscribe(() => {
        alert('Bạn đã thêm thành công Bài Hát');
        this.router.navigate(['/']);
      // tslint:disable-next-line:no-shadowed-variable
      }, error => {
        console.log(error),
          alert('Bạn chưa thêm thành công');
      }
    );
  }

  getAvatarUrl(avatarUrl: string) {
    this.avatarUrl = avatarUrl;
    console.log(avatarUrl);
  }

}
