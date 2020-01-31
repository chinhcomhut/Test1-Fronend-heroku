export class UpdateInfo {
    id: number;
    name: string;
    email: string;
    avatarUrl: string;


    constructor(name: string, email: string) {
        this.name = name;
        this.email = email;
    }
}
