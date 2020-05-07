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
  singer: Partial<SingerInfo>;
  avatarUrl: string;
  singerList: SingerInfo[] = [];
  songList: Song[] = [];
  constructor(private router: Router,
              private service: SongService,
              private tokenService: TokenStorageService,
              private singerService: SingerManagerService,
              private route: ActivatedRoute,
              public fb: FormBuilder) {
    this.songForm = new FormGroup({
      avatarUrl: new FormControl(''),
      category: new FormControl(''),
      nameSong: new FormControl(''),
      lyrics: new FormControl(''),
      singer: new FormControl(''),
      mp3Url: new FormControl(''),
      describes: new FormControl('')
    });
    // this.singer = {
    //   id: '',
    //   avatarSinger: '',
    //   nameSinger: '',
    //   information: ''
    // }
    this.song = {
      avatarUrl: '',
      nameSong: '',
      category: '',
      lyrics: '',
      mp3Url: '',
      describes: '',
    };
  }
  changeSinger($event) {
 this.song.singer = $event;
  }
ngOnInit() {
    // this.songForm = this.fb.group({
    //   songList: [''],
    //   singeList: [''],
    // });
  this.singerService.getSinger().subscribe(
    result => {
      this.singerList = result;
    }, error => {
      alert('error get listSinger');
    }
  );
  // this.info = {
  //     singer: this.singerService.getSinger(),
  //     name: this.tokenService.getUsername(),
  //     token: this.tokenService.getToken(),
  //     username: this.tokenService.getUsername()
  //   };
  }

onChange($event) {
    this.song.mp3Url = $event;
  }

onAvatar($event) {
    this.song.avatarUrl = $event;
  }

createSong() {
  this.service.createSong(this.song).subscribe(() => {
          alert('Bạn đã thêm thành công Bài Hát');
          this.router.navigate(['/']);
        }, error => {
          console.log(error),
              alert('Bạn chưa thêm thành công');
        }
    );

  }
  // onSubmit() {
  //  console.log(this.songForm.value);
  // }

// getAvatarUrl(avatarUrl: string) {
//     this.avatarUrl = avatarUrl;
//     console.log(avatarUrl);
//   }


}
