import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuxiliarService } from '../../../_lib/auxiliar.service';
import { DatabaseProvider } from '../../../providers/database/database';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DiariaControl } from '../../../_models/DiariaControl.model';
import { TicketDetailPage } from '../ticket-detail/ticket-detail';

@IonicPage()
@Component({
  selector: 'page-tickets',
  templateUrl: 'tickets.html',
})
export class TicketsPage {

  private TicketDetailPage

  miControl: DiariaControl;
  diariaControl: DiariaControl[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public _auxiliarService: AuxiliarService,
    public database: DatabaseProvider) {
    this.TicketDetailPage = TicketDetailPage;
    this.getDiariaControl();
  }

  ionViewDidEnter() {
    if (this._auxiliarService.statusDelete == 1) {
      this.getDiariaControl();
      this._auxiliarService.statusDelete = 0;
    }
  }

  getTotal(): number {
    let total: number = 0;
    this.diariaControl.forEach(element => {
      total += element.total;
    });
    return total;
  }


  getDiariaControl() {
    this.miControl = new DiariaControl(0, 0, '', 0, 0, 0);
    this.diariaControl = [];
    this.database.getDiariaControlByStatus(this.miControl).then((data: DiariaControl[]) => {
      this.diariaControl = data as DiariaControl[];
    }, (error) => {
      console.log("Error al consultar: ", error);
    });
  }

  ionViewDidLoad() {
  }

  ticketSelected(control: DiariaControl) {
    var params = {
      pControl: control
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
