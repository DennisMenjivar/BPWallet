import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Pedazo } from '../_models/Pedazo.model';
import { DiariaDetalle } from '../_models/DiariaDetalle.model';
import { Closure } from '../_models/Closure.model';

@Injectable()
export class AuxiliarService {

    closureStatus: boolean = false;
    statusDelete: number = 0;
    miClosure: Closure = new Closure(0, '', '', 0, 0, 0, '', -1, 0, 0, 0);

    totalTicket: number = 0;
    totalConsolidated: number = 0;
    diariaDetalle: DiariaDetalle[];
    stocks: Pedazo[];
    totalDataToSendViaWhatsapp: string = '';

    constructor() {
    }

    //  current_api: string = "http://creaxisapi.creaxis.xyz/";
    //current_api: string = "http://localhost:8081/";
    //current_api: string = "http://localhost:56782/";

    /* Funciones para Interaccion con Web API */
    objectToParams(f: any) {
        var tparams: URLSearchParams = new URLSearchParams();

        for (var key in f) {
            if (f.hasOwnProperty(key)) {
                let val = f[key];
                tparams.set(key, val);
            }
        }

        return tparams;
    }
}