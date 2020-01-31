import {Song} from '../song/song';
// import {SignUpInfo} from '../userManager/Signup-Infor';
import {SignUpInfo} from '../../auth/signup-info';

export class PlaylistInfor {
    id: number;
    playlistName: string;
    avatarPlaylist: string;
    songs: Song[];
    users: SignUpInfo[];


    constructor(id: number, playlistName: string, avatarPlaylist: string, songs: Song[], users: SignUpInfo[]) {
        this.id = id;
        this.playlistName = playlistName;
        this.avatarPlaylist = avatarPlaylist;
        this.songs = songs;
        this.users = users;
    }
}
