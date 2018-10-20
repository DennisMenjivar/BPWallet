export class User {
    id: number;
    id_user: number;
    username: string;
    password: string;
    name: string;
    kind: number;
    license: number;
    status: number;

    constructor(id: number, id_user: number, username: string, password: string, name: string, kind: number, license: number, status: number) {
        this.id = id;
        this.id_user = id_user;
        this.username = username;
        this.password = password;
        this.name = name;
        this.kind = kind;
        this.license = license;
        this.status = status;
    }
}