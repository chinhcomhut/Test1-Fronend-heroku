import { Component, OnInit } from '@angular/core';
import {Track} from 'ngx-audio-player';
import {TokenStorageService} from '../auth/token-storage.service';

@Component({
  selector: 'app-list',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // info: any;
  private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';

  // Material Style Basic Audio Player Title and Audio URL
  msbapTitle = 'Night Owl (by Broke For Free)';
  msbapAudioUrl = `${this.fmaBaseUrl}/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3`;

  msbapDisplayTitle = false;
  msbapDisplayVolumeControls = true;

  // Material Style Advance Audio Player Playlist
  msaapPlaylist: Track[] = [
      {
      title: '1400 (by Yung Kart)',
      link: `${this.fmaBaseUrl}/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3`
      },
      {
      title: 'Epic Song (by BoxCat Games)',
      link: `${this.fmaBaseUrl}/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3`
    },
    {
      title: 'Hachiko (The Faithful Dog) (by The Kyoto)',
      link: `${this.fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`
    },
    {
      title: 'Starling (by Podington Bear)',
      link: `${this.fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`
    },
    {
      title: 'chot nhot',
      // tslint:disable-next-line:max-line-length
      link: `https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/17bt97q7eld?alt=media&token=21a7e218-7dd7-4924-b21a-9e19640e6560`
    }
  ];

  msaapDisplayTitle = true;
  msaapDisplayPlayList = true;
  pageSizeOptions = [2, 4, 6];

  msaapDisplayVolumeControls = true;

  constructor() { }

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

  ngOnInit() {
    // this.info = {
    //   token: this.token.getToken(),
    //   username: this.token.getUsername(),
    //   roles: this.token.getAuthorities()
    // };
  }
  // logout() {
  //   this.token.signOut();
  //   window.location.reload();
  // }

}
