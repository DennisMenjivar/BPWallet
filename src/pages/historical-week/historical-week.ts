import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { AuxiliarService } from '../../_lib/auxiliar.service';
import { DatabaseProvider } from '../../providers/database/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { WeekClosure } from '../../_models/WeekClosure.model';
import { HistoricalPage } from '../HistoricalTodo/historical/historical';

@IonicPage()
@Component({
  selector: 'page-historical-week',
  templateUrl: 'historical-week.html',
})
export class HistoricalWeekPage {

  private hostorial

  closures: WeekClosure[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _auxiliarService: AuxiliarService, public toastCtrl: ToastController, public database: DatabaseProvider) {
    this.hostorial = HistoricalPage;
    this.getClosures();
  }

  ionViewDidLoad() {

  }

  getClosures() {
    this.closures = [];
    this.database.getWeekClosures().then((data) => {
      if (data) {
        this.closures = data;
      }
    });
  }

  goToHistorical(closure: WeekClosure) {
    var params = {
      pWeekClosure: closure
    };
    this.navCtrl.push(this.hostorial, params);
  }

  showToast(msg: string) {
    const toast = this.toastCtrl.create({
      message: msg,
      duration: 800
    });
    toast.present();
  }
}
