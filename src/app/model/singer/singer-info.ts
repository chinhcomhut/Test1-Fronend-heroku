import {Song} from '../song/song';
// import {SignUpInfo} from '../userManager/Signup-Infor';

import {SignUpInfo} from '../../auth/signup-info';

export class SingerInfo {
    id?: string;
    nameSinger: string;
    avatarSinger: string;
    information: string;
    // users: SignUpInfo;
    songs: Song[];
    constructor(id: string) {
        this.id = id;
    }
}


