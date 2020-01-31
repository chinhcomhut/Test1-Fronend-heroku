import { Component, OnInit } from '@angular/core';
import {SingerInfo} from '../../../model/singer/singer-info';
import {SingerManagerService} from '../../../services/singerManager/singer-manager.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-singer',
  templateUrl: './detail-singer.component.html',
  styleUrls: ['./detail-singer.component.css']
})
export class DetailSingerComponent implements OnInit {

  title = 'Chi Tiết Ca Sĩ';
  singers: SingerInfo;

  constructor(private singerService: SingerManagerService,
              private routes: ActivatedRoute) {
  }

  ngOnInit() {
    this.routes.paramMap.subscribe(paramMap => {
      const id = +paramMap.get('id');
      this.singerService.getSingerById(id).subscribe(
          next => {
            this.singers = next;
            console.log(next);
            console.log(this.singers);
          },
          error => {
            this.singers = null;
            console.log(error);
          }
      );
    });
  }

}
