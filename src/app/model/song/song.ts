export class Song {
    id?: number;
    avatarUrl?: string;
    nameSong?: string;
    singer?: string;
    mp3Url?: string;
    describes?: string;
    category?: string;
    lyrics?: string;
    likeSong?: number;
    listenSong?: number;
    // user: {
    //     id: number;
    // };

    constructor(
        id: number,
        avatarUrl: string,
        nameSong: string,
        singer: string,
        mp3Url: string,
        describes: string,
        category: string,
        lyrics: string,
        likeSong: number,
        listenSong: number
    ) {
        this.id = id;
        this.avatarUrl = avatarUrl;
        this.nameSong = nameSong;
        this.singer = singer;
        this.mp3Url = mp3Url;
        this.describes = describes;
        this.category = category;
        this.lyrics = lyrics;
        this.likeSong = likeSong;
        this.listenSong = listenSong;
    }
}
