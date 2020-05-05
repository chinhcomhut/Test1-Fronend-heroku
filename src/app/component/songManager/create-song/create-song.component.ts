import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Song} from '../../../model/song/song';
import {ActivatedRoute, Router} from '@angular/router';
import {SongService} from '../../../services/song/song.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {SingerInfo} from '../../../model/singer/singer-info';
import {SingerManagerService} from '../../../services/singerManager/singer-manager.service';


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
  public singerList: SingerInfo[] = [];
  constructor(private router: Router,
              private service: SongService,
              private tokenService: TokenStorageService,
              private singerService: SingerManagerService,
              private route: ActivatedRoute) {
    this.songForm = new FormGroup({
      avatarUrl: new FormControl(''),
      category: new FormControl(''),
      nameSong: new FormControl(''),
      lyrics: new FormControl(''),
      singer: new FormControl(''),
      mp3Url: new FormControl(''),
      describes: new FormControl('')
    });
    // @ts-ignore
    this.song = {
      avatarUrl: '',
      nameSong: '',
      category: '',
      lyrics: '',
      singer: '',
      mp3Url: '',
      describes: '',
    };
  }
  ngOnInit() {
    this.singerService.getSinger().subscribe(
      result => {
        this.singerList = result;
      }, error => {
        alert('error get listSinger');
      }
    );
    this.info = {
      name: this.tokenService.getUsername(),
      token: this.tokenService.getToken(),
      username: this.tokenService.getUsername()
    };
  }

  onChange($event) {
    this.song.mp3Url = $event;
  }

  onAvatar($event) {
    this.song.avatarUrl = $event;
  }

  createSong() {
    console.log(this.song);
    this.service.createSong(this.song).subscribe(() => {
          alert('Bạn đã thêm thành công Bài Hát');
          this.router.navigate(['/']);
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
