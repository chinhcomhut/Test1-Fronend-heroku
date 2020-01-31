import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {PlayerService} from '../../../services/player/player.service';
import {Player} from '../../../model/player';
import {Track} from 'ngx-audio-player';
import {Song} from '../../../model/song/song';

@Component({
  selector: 'app-detail-player',
  templateUrl: './detail-player.component.html',
  styleUrls: ['./detail-player.component.css']
})
export class DetailPlayerComponent implements OnInit {
  sub: Subscription;
  title: string;
  songs: Song[];
  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [2, 4, 6];
  msaapDisplayVolumeControls = true;
  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;
  playlist1: Track;
  playlist2: Track[] = [];
  msaapPlaylist2: Track[] = [];

  constructor(private activatedRoute: ActivatedRoute, private playerService: PlayerService) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.playerService.getPlayer(id).subscribe(next => {
        this.title = next.title;
        this.songs = next.songs;
        for (const song of this.songs) {
          // @ts-ignore
          this.playlist1 = {
            title: song.nameSong,
            link: song.mp3Url
          };
          this.playlist2.push(this.playlist1);
        }
        this.msaapPlaylist2 = this.playlist2;
      }, error => {
        console.log(error);
      });
    });
  }
  changeMsbapDisplayTitle(event) {
    this.msbapDisplayTitle = event.checked;
  }

  changeMsbapDisplayVolumeControls(event) {
    this.msbapDisplayVolumeControls = event.checked;
  }

  changeMsaapDisplayTitle(event) {
    this.msaapDisplayTitle = event.checked;
  }

  changeMsaapDisplayPlayList(event) {
    this.msaapDisplayPlayList = event.checked;
  }

  changeMsaapDisplayVolumeControls(event) {
    this.msaapDisplayVolumeControls = event.checked;
  }

}
