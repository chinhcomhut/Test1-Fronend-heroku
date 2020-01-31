import { Component, OnInit } from '@angular/core';
import {Player} from '../../model/player';
import {PlayerService} from '../../services/player/player.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
player: Player[] = [];
  constructor(private playerService: PlayerService) { }

  ngOnInit() {
    this.playerService.getListPlayer().subscribe(next => {
      this.player = next;
    }, error => {
      console.log(error);
    });
  }

}
