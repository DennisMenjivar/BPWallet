import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ToastController, AlertController } from 'ionic-angular';
import { AuxiliarService } from '../../_lib/auxiliar.service';
import { DatabaseProvider } from '../../providers/database/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
//library for social-sharing
import { SocialSharing } from '@ionic-native/social-sharing';
import { Closure } from '../../_models/Closure.model';
import { Consolidated } from '../../_models/Consolidated.model';

@IonicPage()
@Component({
  selector: 'page-consolidated',
  templateUrl: 'consolidated.html',
})
export class ConsolidatedPage {

  miDate = new Date();

  activeContainer: boolean = true;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public _auxiliarService: AuxiliarService,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public database: DatabaseProvider,
    private alertCtrl: AlertController, private socialSharing: SocialSharing) {
    this.getConsolidated();
  }

  ionViewDidLoad() {

  }

  validateDate() {
    var today = new Date();
    var dd = today.getDate();
    if (dd == 15 && this._auxiliarService.miClosure.description == 'Mañana' || dd == 15 && this.database.loginStatus == 0) {
      this.database.deleteUsers();
    }
  }

  consolidated: Consolidated[];

  getConsolidated() {
    this.consolidated = [];
    this.database.getConsolidatedFinal(0)
      .then((data) => {
        if (data) {
          this.totalToSend = this.database.totalTotalConsolidated;
          this.consolidated = data;
          this.loadJSONDataToSend();
          this.loader.dismiss();
        }
      });
  }

  whatsappShare(msg: string) {
    this.socialSharing.shareViaWhatsApp(msg, null, null);
  }

  totalToSend: number = 0;

  sendJSONDATA() {
    this.whatsappShare(this.JSdata);
  }

  JSdata: string = '';
  loadJSONDataToSend() {
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
        closure: this._auxiliarService.miClosure.id,
        total: this.totalToSend,
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

  myDate = String(new Date());
  createClosureFinish(pPorcent: number) {
    this.validateDate();
    let totalTotal = this.database.totalTotalConsolidated;
    let porcent = totalTotal * (pPorcent / 100);
    let closure = new Closure(this._auxiliarService.miClosure.id, '', this.myDate, 0, totalTotal, 0, this.database.user.username, -1, 0, porcent, 0);
    this.database.createClosureFinish(closure).then((data) => {
      if (data) {
        // this.sendCSVData();
        //this._auxiliarService.miClosure = data;
        for (let index = 0; index < 100; index++) {
          this.database.createStock(index).then((data) => {
            this.getConsolidated();
            this.activeContainer = false;
          });
        }
      }
      this.presentLoading("Procesando, Porfavor espere..");
    });
  }

  porcentMessage() {
    let alert = this.alertCtrl.create({
      title: 'Ganancia',
      message: 'Ingrese su Porcentaje de Ganancia',
      inputs: [
        {
          name: 'porcent',
          placeholder: 'Porcentaje Ganancia',
          type: 'tel'
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
            if (data.porcent) {
              let porcent: number = data.porcent;
              this.presentConfirm(porcent);
            } else {
              this.porcentMessage();
            }
          }
        }
      ]
    });
    alert.present();
  }

  presentConfirm(porcent: number) {
    let alert = this.alertCtrl.create({
      title: "Cierre",
      message: "Esta seguro que desea hacer cierre?",
      buttons: [
        {
          text: 'Guardar y Enviar',
          handler: () => {
            this.presentConfirmViaSendData(porcent);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.showToast("Cancelado!");
          }
        }
      ]
    });
    alert.present();
  }

  presentConfirmViaSendData(porcent: number) {
    let alert = this.alertCtrl.create({
      title: "Formato",
      message: "En que formato desea enviar la información?",
      buttons: [
        {
          text: 'BPWallet',
          handler: () => {
            this.sendJSONDATA();
            this.createClosureFinish(porcent);
          }
        },
        {
          text: 'Normal',
          handler: () => {
            this.sendNormalData();
            this.createClosureFinish(porcent);
          }
        },
        {
          text: 'Excel',
          handler: () => {
            this.sendCSVData();
            this.createClosureFinish(porcent);
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            this.showToast("Cancelado!");
          }
        }
      ]
    });
    alert.present();
  }

  doRefresh(refresher) {
    this.getConsolidated();
    refresher.complete();
  }

  showToast(msg: string) {
    this.loader.dismiss();

    const toast = this.toastCtrl.create({
      message: msg,
      duration: 700
    });
    toast.present();
  }

  loader = this.loadingCtrl.create({
    content: "Cargando..."
  });

  presentLoading(msg: string) {
    this.loader = this.loadingCtrl.create({
      content: msg
      , duration: 120000
    });
    this.loader.present();
  }

}
