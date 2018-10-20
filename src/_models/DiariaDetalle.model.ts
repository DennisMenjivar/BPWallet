export class DiariaDetalle {
    id: number;
    id_control: number;
    number: number;
    lempiras: number;
    id_client: number;
    client: string;
    date: string;
    status: number;
    id_closure: number;
    paid: number;
    plays: number;

    constructor(id: number, id_control: number, number: number, lempiras: number, id_client: number, client: string, date: string, status: number, id_closure: number, paid: number) {
        this.id = id;
        this.id_control = id_control;
        this.number = number;
        this.lempiras = lempiras;
        this.id_client = id_client;
        this.client = client;
        this.date = date;
        this.status = status;
        this.id_closure = id_closure;
        this.paid = paid;
        this.plays = 1;
    }

    toStringReceiptView(): string {
        if (this.number == 0 || this.number == 1 || this.number == 2 || this.number == 3 || this.number == 4 || this.number == 5 || this.number == 6 || this.number == 7 || this.number == 8 || this.number == 9) {
            return "Número:" + "0" + this.number + " - Lempiras:" + this.lempiras + "\n";
        }
        return "Número:" + this.number + " - Lempiras:" + this.lempiras + "\n";
    }
}