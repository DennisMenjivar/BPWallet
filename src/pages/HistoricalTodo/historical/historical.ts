import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import { AuxiliarService } from '../../../_lib/auxiliar.service';
import { DatabaseProvider } from '../../../providers/database/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Closure } from '../../../_models/Closure.model';
import { HistoricalDetailPage } from '../historical-detail/historical-detail'
import { WeekClosure } from '../../../_models/WeekClosure.model';

@IonicPage()
@Component({
  selector: 'page-historical',
  templateUrl: 'historical.html',
})
export class HistoricalPage {

  private tickers

  closures: Closure[];

  title: string = '';

  miWeekClosure: WeekClosure = new WeekClosure(0, '', '', 0, 0, 0, '', 0, 0);

  constructor(public navCtrl: NavController, public navParams: NavParams, public _auxiliarService: AuxiliarService, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public database: DatabaseProvider, private alertCtrl: AlertController) {
    this.tickers = HistoricalDetailPage;

    if (this.navParams.get('pWeekClosure')) {
      this.miWeekClosure = this.navParams.get('pWeekClosure');
      this.title = 'Cierres Semana #' + this.miWeekClosure.id;
      this.getClosuresByIdControl(this.miWeekClosure.id);
    } else {
      this.title = 'Cierres y Pagos';
      this.getClosures();
    }
  }

  createWeekClosure() {
    let myCurrentDate = String(new Date());
    this.miWeekClosure.date = myCurrentDate;
    this.database.createWeekClosure(this.miWeekClosure).then((wk) => {
      if (wk) {
        this.getClosures();
        this.showToast('Creada correctamente');
      }
    });
  }

  ionViewDidLoad() {

  }

  ionViewDidEnter() {
    if (this._auxiliarService.statusDelete == 1) {
      this.getClosures();
      this._auxiliarService.statusDelete = 0;
    }
  }

  getClosures() {
    this.closures = [];
    this.database.getClosures().then((data) => {
      if (data) {
        this.closures = data;
      }
    });
  }

  getClosuresByIdControl(id_control: number) {
    this.closures = [];
    this.database.getClosuresByIdControl(id_control).then((data) => {
      if (data) {
        this.closures = data;
      }
    });
  }

  conditionWinnigNumber(closure: Closure) {
    if (closure.winningNumber == -1 && closure.status == 1) {
      this.presentConfirm(closure);
    } else {
      this.goToTickets(closure);
    }
  }

  goToTickets(closure: Closure) {
    var params = {
      pClosure: closure
    };
    this.navCtrl.push(this.tickers, params);
  }

  validateWinningNumber(): number {
    let cont = 0;
    this.closures.forEach(element => {
      if (element.winningNumber == -1) {
        cont = 1;
        return;
      }
    });
    return cont;
  }

  presentConfirmWeekClosure() {
    if (this.validateWinningNumber() == 0) {
      let alert = this.alertCtrl.create({
        title: 'Cierre Semanal',
        message: 'Desea hacer cierre semanal?',
        buttons: [
          {
            text: 'SI',
            handler: () => {
              this.createWeekClosure();
            }
          },
          {
            text: 'Cancelar',
            role: 'cancel',
            handler: () => {
              //--Cancelar
            }
          }
        ]
      });
      alert.present();
    } else {
      this.showToast('ERROR; Tiene cierres pendientes!');
    }
  }

  presentConfirm(closure: Closure) {
    let alert = this.alertCtrl.create({
      title: 'Número Ganador',
      message: 'Desea ingresar el numero ganador?',
      buttons: [
        {
          text: 'SI',
          handler: () => {
            this.presentPrompt(closure);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.goToTickets(closure);
          }
        }
      ]
    });
    alert.present();
  }

  presentPrompt(closure: Closure) {
    let alert = this.alertCtrl.create({
      title: 'Número Ganador',
      message: 'Ingrese el número ganador',
      inputs: [
        {
          name: 'number',
          placeholder: 'Número ganador',
          type: 'tel'
        },
        {
          name: 'multipler',
          placeholder: 'Multiplo ganador',
          type: 'tel'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            this.goToTickets(closure);
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            if (data.multipler != '' && data.number != '' && data.multipler != null && data.number != null) {
              closure.winningNumber = data.number;
              this.database.setWinningNumber(closure, data.multipler).then((dataWN) => {
                if (dataWN) {
                  closure.totalWinning = dataWN;
                  this.showToast("Número ganador ingresado.")
                }
                this.getClosures();
              })
            } else {
              this.showToast("ERROR: llene los datos correctamente!");
            }
          }
        }
      ]
    });
    alert.present();
  }

  showToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 1800
    });
    toast.present();
  }

}