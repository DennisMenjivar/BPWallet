export class Consolidated {
    id: number;
    id_user: number;
    user: string;
    number: number;
    lempiras: number;
    kind: number;
    date: string;
    status: number;
    id_closure: number;

    constructor(id: number, id_user: number, user: string, number: number, lempiras: number, kind: number, date: string, status: number, id_closure: number) {
        this.id = id;
        this.id_user = id_user;
        this.user = user;
        this.number = number;
        this.lempiras = lempiras;
        this.kind = kind;
        this.date = date;
        this.status = status;
        this.id_closure = id_closure;
    }

    toStringCSV(): string {
        return this.number + ";" + this.lempiras + "\n";
    }

    toStringNormal(): string {
        if (this.number == 0 || this.number == 1 || this.number == 2 || this.number == 3 || this.number == 4 || this.number == 5 || this.number == 6 || this.number == 7 || this.number == 8 || this.number == 9) {
            return "0" + this.number + "/" + this.lempiras + "\n";
        }
        return this.number + "/" + this.lempiras + "\n";
    }
}