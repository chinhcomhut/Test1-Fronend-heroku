import { Component, OnInit } from '@angular/core';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../services/song/song.service';
import {TokenStorageService} from '../../../auth/token-storage.service';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {ActivatedRoute} from '@angular/router';
import {Track} from 'ngx-audio-player';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-detail-song',
  templateUrl: './detail-song.component.html',
  styleUrls: ['./detail-song.component.css']
})

export class DetailSongComponent implements OnInit {
    title = 'Chi Tiết Bài Hát';
    song: Song;
    songInfor: Song[] = [];
    likeCounter = 0;
    listenCounter = 0;
    private fmaBaseUrl = 'https://files.freemusicarchive.org/storage-freemusicarchive-org/music';
    // Material Style Basic Audio Player Title and Audio URL
    msbapTitle = 'Night Owl (by Broke For Free)';
    msbapAudioUrl = `${this.fmaBaseUrl}/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3`;

    msbapDisplayTitle = false;
    msbapDisplayVolumeControls = true;

    // Material Style Advance Audio Player Playlist
    // msaapPlaylist: Track[] = [
    //     {
    //         title: 'hehe',
    //         link: `${this.song.mp3Url}`
    //     }
    // ];
    // msList: Track[] = [
    //     {
    //         title: `${this.song.lyrics}`,
    //         link: `${this.song.mp3Url}`
    //     }
    // ];
    // msaapPlaylist: Track[] = [
    //     {
    //         title: '1400 (by Yung Kartz)',
    //         link: `${this.fmaBaseUrl}/no_curator/Yung_Kartz/August_2018/Yung_Kartz_-_10_-_1400.mp3`
    //     },
    //     {
    //         title: 'Epic Song (by BoxCat Games)',
    //         link: `${this.fmaBaseUrl}/ccCommunity/BoxCat_Games/Nameless_The_Hackers_RPG_Soundtrack/BoxCat_Games_-_10_-_Epic_Song.mp3`
    //     },
    //     {
    //         title: 'Hachiko (The Faithful Dog) (by The Kyoto)',
    //         link: `${this.fmaBaseUrl}/ccCommunity/The_Kyoto_Connection/Wake_Up/The_Kyoto_Connection_-_09_-_Hachiko_The_Faithtful_Dog.mp3`
    //     },
    //     {
    //         title: 'Starling (by Podington Bear)',
    //         link: `${this.fmaBaseUrl}/Music_for_Video/Podington_Bear/Solo_Instruments/Podington_Bear_-_Starling.mp3`
    //     },
    //     {
    //         title: 'chot nhot',
    //         // tslint:disable-next-line:max-line-length
    //         link: `https://firebasestorage.googleapis.com/v0/b/chinhbeo-18d3b.appspot.com/o/17bt97q7eld?alt=media&token=21a7e218-7dd7-4924-b21a-9e19640e6560`
    //     }
    // ];

    msaapDisplayTitle = true;
    msaapDisplayPlayList = true;
    pageSizeOptions = [2, 4, 6];

    msaapDisplayVolumeControls = true;



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



  constructor(private token: TokenStorageService,
              private songService: SongService,
              private routes: ActivatedRoute,
              config: NgbModalConfig,
              private modalService: NgbModal,
              iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIcon(
            'thumbs-up',
            sanitizer.bypassSecurityTrustResourceUrl('assets/images/icons/like.png'));
        config.backdrop = 'static';
        config.keyboard = false;
  }

  ngOnInit() {
    // this.songService.getSong().subscribe(
    //   next => {
    //     this.songInfor = next;
    //   },
    //   error => {
    //     this.songInfor = [];
    //   },
    // );

    this.routes.paramMap.subscribe( paramMap => {
      const id = +paramMap.get('id');
      this.songService.getSongById(id).subscribe(
          next => {
            this.song = next;
          },
          error => {
            this.song = null;
            console.log(error);
          }
      );
    });
  }

  likeCount(id: number) {
    this.likeCounter++;
    if (this.likeCounter === 1) {
      this.songService
          .getLikeSongById(id)
          .subscribe(
              data => {
                this.song = data;
              },
              error => {
                this.song = null;
              }
          );
    }
  }
    listenCount(id: number) {
        this.listenCounter++;
        if (this.listenCounter === 1) {
            this.songService
                .getListenSong()
                .subscribe (
                    data => {
                    },
                    error => {
                        this.song = null;
                    }
                );
        }
    }

  open(content) {
    this.modalService.open(content);
  }

}
