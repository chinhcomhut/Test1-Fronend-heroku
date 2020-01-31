import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {SingerInfo} from '../../../model/singer/singer-info';
import {ActivatedRoute, Router} from '@angular/router';
import {SingerManagerService} from '../../../services/singerManager/singer-manager.service';

@Component({
  selector: 'app-updatesinger',
  templateUrl: './updatesinger.component.html',
  styleUrls: ['./updatesinger.component.css']
})
export class UpdatesingerComponent implements OnInit {

  title = 'Update Ca Sĩ';

  singerForm: FormGroup;
  singer: Partial<SingerInfo>;

  constructor(
      private router: Router,
      private  routes: ActivatedRoute,
      private singerManagerService: SingerManagerService) {
    this.singerForm = new FormGroup({
      nameSinger: new FormControl(''),
      singerAvatar: new FormControl(''),
      description: new FormControl(''),
    });
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.singerManagerService.getSingerById(id).subscribe(
          data => {
            this.singer = data;
          },
          error => {
            this.singer = null;
          }
      );
    });
  }

  onAvatar($event) {
    this.singer.singerAvatar = $event;
  }

  createSinger() {
    console.log(this.singer);
    this.singerManagerService.updateSinger(this.singer).subscribe(() => {
          alert('Bạn đã sưa thành công Ca Sĩ');
          this.router.navigate(['/list-singer']);
        }, error => {
          console.log(error),
              alert('Bạn chưa sửa thành công');
        }
    );
  }
}
