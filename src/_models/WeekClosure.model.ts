export class WeekClosure {
    id: number;
    description: string;
    date: string;
    status: number;
    total: number;
    id_user: number;
    user: string;
    totalPorcentWinnigSeller: number;
    totalWinning: number;

    constructor(id: number, description: string, date: string, status: number, total: number, id_user: number, user: string, totalPorcentWinnigSeller: number, totalWinning: number) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.status = status;
        this.total = total;
        this.id_user = id_user;
        this.user = user;
        this.totalPorcentWinnigSeller = totalPorcentWinnigSeller;
        this.totalWinning = totalWinning;
    }
}