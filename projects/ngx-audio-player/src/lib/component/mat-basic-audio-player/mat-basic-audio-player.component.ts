import { Component, OnInit, Input } from '@angular/core';
import { BaseAudioPlayerFunctions } from '../base/base-audio-player-components';

@Component({
    selector: 'mat-basic-audio-player',
    templateUrl: './mat-basic-audio-player.component.html',
    styleUrls: ['./mat-basic-audio-player.component.css']
})
export class MatBasicAudioPlayerComponent extends BaseAudioPlayerFunctions implements OnInit {

    @Input()
    title: string;

    @Input()
    audioUrl: string;

    @Input()
    displayTitle = false;

    @Input()
    autoPlay = true;

    @Input()
    displayVolumeControls = true;
    @Input()
    rePlay = false;
    constructor() {
        super();
    }

    ngOnInit() {
        this.bindPlayerEvent();
        if (this.autoPlay) {
            super.play();
        }
        // this.bindPlayerEvent();
        // if (this.rePlay) {
        //    super.replay();
        // }
    }

    resetSong(): void {
        this.player.nativeElement.src = this.audioUrl;
    }

}
