import {Song} from './song/song';

export interface Player {
    id?: number;
    title?: string;
    songs?: Song[];
}
