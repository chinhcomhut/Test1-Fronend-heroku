import {Song} from '../song/song';
// import {SignUpInfo} from '../userManager/Signup-Infor';

import {SignUpInfo} from '../../auth/signup-info';

export class SingerInfo {
    id: number;
    nameSinger: string;
    singerAvatar: string;
    information: string;
    users: SignUpInfo;
    songs: Song[];
}
