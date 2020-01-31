import { Component, OnInit } from '@angular/core';
import {SingerInfo} from '../../../model/singer/singer-info';
import {SingerManagerService} from '../../../services/singerManager/singer-manager.service';

@Component({
  selector: 'app-list-singer',
  templateUrl: './list-singer.component.html',
  styleUrls: ['./list-singer.component.css']
})
export class ListSingerComponent implements OnInit {

  singerList: SingerInfo[] = [];

  constructor(private singerService: SingerManagerService) {
  }

  ngOnInit() {
    this.singerService.getSinger().subscribe(next => {
      this.singerList = next;
      console.log(next);
    }, error => {
      console.log(error);
    });
  }


}
