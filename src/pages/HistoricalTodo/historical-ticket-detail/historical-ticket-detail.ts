import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import { AuxiliarService } from '../../../_lib/auxiliar.service';
import { DatabaseProvider } from '../../../providers/database/database';
import { DiariaDetalle } from '../../../_models/DiariaDetalle.model';
import { DiariaControl } from '../../../_models/DiariaControl.model';
import { Pedazo } from '../../../_models/Pedazo.model';

@IonicPage()
@Component({
  selector: 'page-historical-ticket-detail',
  templateUrl: 'historical-ticket-detail.html',
  styles: ['historical-ticket-detail.scss'],
})
export class HistoricalTicketDetailPage {

  miControl: DiariaControl;
  miDetalle: DiariaDetalle = new DiariaDetalle(0, 0, 0, 0, 0, '', '', 0, 0, 0);
  diariaDetalle: DiariaDetalle[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _auxiliarService: AuxiliarService, public toastCtrl: ToastController, public loadingCtrl: LoadingController, public database: DatabaseProvider, private alertCtrl: AlertController) {
    this.miControl = navParams.data.pControl;
    this.miDetalle.id_control = this.miControl.id;
    this.getDiariaDetalle();
  }

  ionViewDidLoad() {

  }



  getDiariaDetalle() {
    this.diariaDetalle = [];
    this.database.getDiariaDetalleByIdControl(this.miDetalle).then((data: DiariaDetalle[]) => {
      this.diariaDetalle = data as DiariaDetalle[];
      data.forEach(element => {
        if (this.navParams.data.pWinningNumber == element.number) {
          if (element.paid == 0) {
            element.paid = 1;
          } else if (element.paid == 2) {
            element.paid = 2;
          }
        }
      });
    }, (error) => {
      console.log("Error al consultar: ", error);
    });
  }

  pay(diaria: DiariaDetalle) {
    this.database.payNumber(diaria.id).then((data) => {
      diaria.paid = 2;
    });
  }

  presentConfirmPay(diaria: DiariaDetalle) {
    if (diaria.paid == 1) {
      let alert = this.alertCtrl.create({
        title: 'Pagar',
        message: 'Desea pagar este Número?',
        buttons: [
          {
            text: 'SI',
            handler: () => {
              this.pay(diaria);
            }
          },
          {
            text: 'NO',
            role: 'cancel',
            handler: () => {
              this.showToast("Cancelado!");
            }
          }
        ]
      });
      alert.present();
    }
  }

  deleteTicket() {
    let status = 0;
    this.diariaDetalle.forEach(element => {
      this.database.removeDiariaControlByID(this.miControl).then((data) => {
        this.updateStockByNumber(element.number, element.lempiras);
      });
      status == 1;
    });
    if (status = 1) {
      this.showToast("Ticket #" + this.miControl.id + " Eliminado.");
    }
  }

  updateStockByNumber(number: number, pPedazos: number) {
    let pedazo = new Pedazo(0, 0, 0, 0);
    this._auxiliarService.stocks.forEach(element => {
      if (number == element.number) {
        element.pedazos += pPedazos;
        pedazo.number = element.number;
        pedazo.pedazos = element.pedazos;
        this.database.editStockMinus(pedazo).then((data) => {
        });
      }
    });
  }

  doRefresh(refresher) {
    refresher.complete();
  }

  showToast(msg: string) {
    this.loader.dismiss();

    const toast = this.toastCtrl.create({
      message: msg,
      duration: 3000
    });
    toast.present();
  }

  loader = this.loadingCtrl.create({
    content: "Cargando..."
  });

  presentLoading(msg: string) {
    this.loader = this.loadingCtrl.create({
      content: msg
    });
    this.loader.present();
  }

}
