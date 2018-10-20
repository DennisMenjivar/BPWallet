import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuxiliarService } from '../../../_lib/auxiliar.service';
import { DatabaseProvider } from '../../../providers/database/database';
import { DiariaControl } from '../../../_models/DiariaControl.model';
import { HistoricalTicketDetailPage } from '../historical-ticket-detail/historical-ticket-detail';
import { Closure } from '../../../_models/Closure.model';
import { Consolidated } from '../../../_models/Consolidated.model';
//library for social-sharing
import { SocialSharing } from '@ionic-native/social-sharing';

@IonicPage()
@Component({
  selector: 'page-historical-detail',
  templateUrl: 'historical-detail.html',
})
export class HistoricalDetailPage {

  private TicketDetailPage

  option: string = 'Tickets';

  miControl: DiariaControl;
  diariaControl: DiariaControl[];
  miClosure: Closure;
  consolidated: Consolidated[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _auxiliarService: AuxiliarService, public database: DatabaseProvider, private socialSharing: SocialSharing, private alertCtrl: AlertController) {
    this.miClosure = this.navParams.data.pClosure;
    this.TicketDetailPage = HistoricalTicketDetailPage;
    this.getDiariaControl();
  }

  getTotal(): number {
    let total: number = 0;
    this.diariaControl.forEach(element => {
      total += element.total;
    });
    return total;
  }

  editClosure() {
    if (this.miClosure.status == 1) {
      this.presentPrompt(this.miClosure);
    }
  }

  presentPrompt(closure: Closure) {
    let cPorcent = (closure.totalPorcentWinnigSeller / closure.total) * 100;
    let totalWinNumber = this.getTotalWinByNumber(closure.winningNumber);
    let multiplicated = closure.totalWinning / totalWinNumber
    let alert = this.alertCtrl.create({
      title: 'Editar',
      message: 'Número, Multiplicado y Porcentaje ganancia',
      inputs: [
        {
          name: 'number',
          placeholder: 'Número ganador',
          type: 'tel',
          value: closure.winningNumber.toFixed()
        },
        {
          name: 'multipler',
          placeholder: 'Multiplo ganador',
          type: 'tel',
          value: multiplicated.toFixed()
        },
        {
          name: 'porcent',
          placeholder: 'Porcentaje Ganancia',
          type: 'tel',
          value: cPorcent.toFixed()
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: data => {
            // Cancelar
          }
        },
        {
          text: 'Aceptar',
          handler: data => {
            closure.winningNumber = data.number;
            let totalPorcent = closure.total * (data.porcent / 100);
            this._auxiliarService.statusDelete = 1;
            this.database.updateWinningNumber(closure, data.multipler, totalPorcent).then((data) => {
              if (data) {
                closure.totalWinning = data;
                // this.showToast("Número ganador ingresado.")
              }
              this.navCtrl.popToRoot();
            })
          }
        }
      ]
    });
    alert.present();
  }

  getConsolidated() {
    this.consolidated = [];
    this.database.getConsolidatedFinalByClosure(this.miClosure.id)
      .then((data) => {
        if (data) {
          this.consolidated = data;
          this.loadJSONDataToSend();
        }
      });
  }

  getTotalWinByNumber(winNumber: number): number {
    let total = 0;
    this.consolidated.forEach(element => {
      if (winNumber == element.number) {
        total = element.lempiras;
        return;
      }
    });
    return total;
  }


  getDiariaControl() {
    this.diariaControl = [];
    this.database.getDiariaControlByIDClosure(this.miClosure.id).then((data: DiariaControl[]) => {
      this.diariaControl = data as DiariaControl[];
      this.getTicketsWinning();
      this.getConsolidated();
    }, (error) => {
      console.log("Error al consultar: ", error);
    });
  }

  getTicketsWinning() {
    this.database.getTicketWin(this.miClosure.winningNumber, this.miClosure.id).then((data) => {
      if (data) {
        data.forEach(elementData => {
          this.diariaControl.forEach(elementControl => {
            if (elementData == elementControl.id) {
              elementControl.win = 1;
              return;
            }
          });
        });
      }
    });
  }

  ionViewDidLoad() {

  }

  whatsappShare(msg: string) {
    this.socialSharing.shareViaWhatsApp(msg, null, null);
  }

  JSdata: string = '';
  sendJSONDATA() {
    this.whatsappShare(this.JSdata);
  }

  loadJSONDataToSend() {
    var totalToSend: number = this.getTotal();
    let dataToSend: any[] = [];
    let dataToSendTodo: any[] = [];
    this.consolidated.forEach(element => {
      dataToSend.push({
        number: element.number,
        lempiras: element.lempiras,
      });
    });
    dataToSendTodo.push(
      {
        seller: this.database.user.username,
        closure: this.miClosure.id,
        total: totalToSend,
        numbers: dataToSend
      }
    )
    this.JSdata = JSON.stringify(dataToSendTodo)
  }

  sendNormalData() {
    let total: number = 0;
    let dataToSend: string = '';
    this.consolidated.forEach(element => {
      total += element.lempiras;
      dataToSend += element.toStringNormal();
    });
    dataToSend += ("Total: " + total);
    this.whatsappShare(dataToSend);
  }

  sendCSVData() {
    let dataToSend: string = '';
    this.consolidated.forEach(element => {
      dataToSend += element.toStringCSV();
    });
    this.whatsappShare(dataToSend);
  }

  presentConfirmViaSendData() {
    let alert = this.alertCtrl.create({
      title: "Formato",
      message: "En que formato desea enviar la información?",
      buttons: [
        {
          text: 'Panda',
          handler: () => {
            this.sendJSONDATA();
          }
        },
        {
          text: 'Normal',
          handler: () => {
            this.sendNormalData();
          }
        },
        {
          text: 'Excel',
          handler: () => {
            this.sendCSVData();
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        }
      ]
    });
    alert.present();
  }

  ticketSelected(control: DiariaControl) {
    var params = {
      pControl: control,
      pWinningNumber: this.miClosure.winningNumber
    };
    this.navCtrl.push(this.TicketDetailPage, params);
  }

  goToSeeTicketDetail() {

  }

  doRefresh(refresher) {
    this.getDiariaControl();
    refresher.complete();
  }

}