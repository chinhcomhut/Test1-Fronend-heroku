import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SingerInfo} from '../../../model/singer/singer-info';
import {Router} from '@angular/router';
import {SingerManagerService} from '../../../services/singerManager/singer-manager.service';
import {SignUpInfo} from '../../../auth/signup-info';

@Component({
  selector: 'app-create-singer',
  templateUrl: './create-singer.component.html',
  styleUrls: ['./create-singer.component.css']
})
export class CreateSingerComponent implements OnInit {

  title = 'Thêm Ca Sĩ';

  singerForm: FormGroup;
  singer: Partial<SingerInfo>;

  constructor(
      private router: Router,
      private singerManagerService: SingerManagerService) {
    this.singerForm = new FormGroup({
    });
    this.singer = {
      nameSinger: '',
      avatarSinger: '',
      information: '',
      songs: []
    };
  }
  ngOnInit() {
  }

  onAvatar($event) {
    this.singer.avatarSinger = $event;
  }

  createSinger() {
  console.log(this.singer);
  this.singerManagerService.createSinger(this.singer).subscribe(() => {
          alert('Bạn đã thêm thành công Ca Sĩ');
          this.router.navigate(['/list-singer']);
        }, error => {
          console.log(error),
              alert('Bạn chưa thêm thành công');
        }
    );
  }
}
