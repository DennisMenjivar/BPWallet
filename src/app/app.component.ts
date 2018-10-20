import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { ControlPedazosPage } from '../pages/ControlPedazos/control-pedazos/control-pedazos';
import { TicketsPage } from '../pages/TicketsTodo/tickets/tickets';
import { ConsolidatedPage } from '../pages/consolidated/consolidated';
import { HistoricalPage } from '../pages/HistoricalTodo/historical/historical';
// import { CreateUserPage } from '../pages/create-user/create-user';
import { HistoricalWeekPage } from '../pages/historical-week/historical-week';
import { ReceiveDataPage } from '../pages/receive-data/receive-data';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Principal', component: HomePage },
      { title: 'Tickets', component: TicketsPage },
      { title: 'Recibir datos', component: ReceiveDataPage },
      { title: 'Cierre actual', component: ConsolidatedPage },
      { title: 'Cierres y Pagos', component: HistoricalPage },
      { title: 'Historial semanal', component: HistoricalWeekPage },
      { title: 'Configurar límites', component: ControlPedazosPage }
      // { title: 'Crear usuario', component: CreateUserPage }
    ];
    platform.ready().then(() => {
      platform.registerBackButtonAction(() => {
        //Codigo de lo que quiere hacer cuando le demos back
      }, 100)
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
