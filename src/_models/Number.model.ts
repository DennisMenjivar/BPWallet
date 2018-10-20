export class Number {
    ID: number;
    number: number;
    lempiras: number;
    position: number;

    constructor(pID: number, pNumber: number, pLempiras: number) {
        this.ID = pID;
        this.number = pNumber;
        this.lempiras = pLempiras;
        this.position = -1;
    }
}

export class List {
    ID: number;
    numbers: Number[];
    minNumber: number;
    maxNumber: number;
    minLempiras: number;
    maxLempiras: number;
    lenght: number;
    totalLempiras: number;
    limit: number;
    seller: string;
    remaining: Number[] = [];
    sure: Number[] = [];

    constructor(numbers: Number[], limit: number) {
        this.maxLempiras = -1;
        this.minLempiras = -1;
        this.maxNumber = -1;
        this.minNumber = -1
        this.limit = limit;

        this.lenght = 0;
        numbers.forEach(element => {
            this.getMaxNumber(element.number, element.lempiras, this.maxNumber);
            this.getMinNumber(element.number, element.lempiras, this.minNumber);
            this.getMaxLempiras(element.lempiras, this.maxLempiras);
            this.getMinLempiras(element.lempiras, this.minLempiras);
            numbers.push(new Number(this.lenght, element.number, element.lempiras));
            this.totalLempiras += element.lempiras;
            this.lenght++;
        });
        this.cutLimit();
    }

    cutLimit() {
        let cont: number = 0;
        let cant: number = 100 - this.limit;
        let max: number = this.maxLempiras;

        if (this.lenght >= this.limit) {
            this.numbers.forEach(element => {
                if (cont <= cant) {

                    // if (max >= element.lempiras) {
                    //     this.remaining.push(element);

                    // }
                    cont++;
                }
                this.sure.push(element);
            });
        } else {
            this.remaining = this.numbers;
        }
    }

    ascending() {
        let listAsc: Number[] = [];
        let rest: Number[] = this.numbers;
        return new Promise((resolve, reject) => {
            let position: number = -1;
            rest.forEach(element1 => {
                let max: number = -1;
                rest.forEach(element2 => {
                    if (element1 > element2) {

                    }
                });
            });
        });
    }

    getMaxLempiras(lempiras: number, maxLempiras: number) {
        if (lempiras > maxLempiras) {
            this.maxLempiras = lempiras;
        }
    }

    getMinLempiras(lempiras: number, minLempiras: number) {
        if (lempiras < minLempiras) {
            this.minLempiras = lempiras;
        }
    }

    getMaxNumber(number: number, lempiras: number, minLempiras: number) {
        if (lempiras > minLempiras) {
            this.maxNumber = number;
        }
    }

    getMinNumber(number: number, lempiras: number, minLempiras: number) {
        if (lempiras < minLempiras) {
            this.minNumber = number;
        }
    }
}