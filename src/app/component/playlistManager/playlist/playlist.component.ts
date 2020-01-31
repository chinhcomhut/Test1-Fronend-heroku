import {Component, OnInit} from '@angular/core';
import {PlaylistInfor} from '../../../model/playlist/playlist-Infor';
import {PlaylistService} from '../../../services/playlistManager/playlist.service';
import {ActivatedRoute} from '@angular/router';
import {Track} from 'ngx-audio-player';
import {Song} from '../../../model/song/song';
import {SongService} from '../../../services/song/song.service';

@Component({
    selector: 'app-playlist',
    templateUrl: './playlist.component.html',
    styleUrls: ['./playlist.component.css']
})
export class PlaylistComponent implements OnInit {
    songList: Song[] = [];
    delete: Song;
    song: Song[];
    msaapDisplayTitle = true;
    msaapDisplayPlayList = true;
    pageSizeOptions = [2, 4, 6];
    msaapDisplayVolumeControls = true;
    msbapDisplayTitle = false;
    msbapDisplayVolumeControls = true;
    playlist1: Track;
    playlist2: Track[] = [];
    msaapPlaylist2: Track[] = [];
    songRemote: Song;
    title = 'Chúc Các Bạn Nghe Nhạc Vui Vẻ';

    playlist: PlaylistInfor;

    constructor(private playlistService: PlaylistService,
                private routes: ActivatedRoute,
                private songService: SongService) {
    }

    ngOnInit() {
        this.routes.paramMap.subscribe(paramMap => {
            const id = +paramMap.get('id');
            this.playlistService.getPlayListById(id).subscribe(
                next => {
                    this.playlist = next;
                    console.log(next);
                    this.song = next.songs;
                    this.convertSongToPlaylist(this.song);
                },
                error => {
                    this.playlist = null;
                    console.log(error);
                }
            );
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

    deleteSong(mp3Url: string) {
        for (let i = 0; i < this.song.length; i++) {
            console.log(this.song[i].mp3Url === mp3Url);
            if (this.song[i].mp3Url === mp3Url) {
                this.song.splice(i, 1);
            }
            console.log(this.song.length);
        }

        this.playlistService.updatePlayList(this.playlist).subscribe( () => {
            console.log('success');
        }, error => {
            console.log('error');
        });
        window.location.reload();
    }

    convertSongToPlaylist(songs: Song[]) {
        for (const song of songs) {
            this.playlist1 = {
                title: song.nameSong,
                link: song.mp3Url
            };
            this.playlist2.push(this.playlist1);
        }
        this.msaapPlaylist2 = this.playlist2;
    }
}
