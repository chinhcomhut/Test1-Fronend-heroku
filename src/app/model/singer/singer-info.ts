import {Song} from '../song/song';
// import {SignUpInfo} from '../userManager/Signup-Infor';

import {SignUpInfo} from '../../auth/signup-info';

export interface SingerInfo {
    id?: string;
    nameSinger: string;
    avatarSinger: string;
    information: string;
    // users: SignUpInfo;
    songs: Song[];
}
