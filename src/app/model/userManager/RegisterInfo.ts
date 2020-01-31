export class RegisterInfo {
    name: string;
    username: string;
    email: string;
    password: string;
    avatarUrl: string;
    role: string[];


    constructor(name: string, username: string, email: string, password: string, avatarUrl: string, role: string[]) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.avatarUrl = avatarUrl;
        this.role = role;
    }
}

