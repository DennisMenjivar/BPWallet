import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ClientsPage } from '../pages/clients/clients'
import { ReceiptViewPage } from '../pages/receipt-view/receipt-view';
import { AuxiliarService } from '../_lib/auxiliar.service'
import { SocialSharing } from '@ionic-native/social-sharing';
import { ControlPedazosPage } from '../pages/ControlPedazos/control-pedazos/control-pedazos';
import { RangeNumbersPage } from '../pages/ControlPedazos/range-numbers/range-numbers';
import { TicketsPage } from '../pages/TicketsTodo/tickets/tickets';
import { TicketDetailPage } from '../pages/TicketsTodo/ticket-detail/ticket-detail';
import { ConsolidatedPage } from '../pages/consolidated/consolidated';
import { HistoricalPage } from '../pages/HistoricalTodo/historical/historical';
import { HistoricalDetailPage } from '../pages/HistoricalTodo/historical-detail/historical-detail';
import { HistoricalTicketDetailPage } from '../pages/HistoricalTodo/historical-ticket-detail/historical-ticket-detail';
import { ReceiveDataPage } from '../pages/receive-data/receive-data';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { DatabaseProvider } from '../providers/database/database';
import { SQLite } from '@ionic-native/sqlite';
import { HttpClientModule } from '@angular/common/http';
import { Clipboard } from '@ionic-native/clipboard';
import { PopoverDataReceivedComponent } from '../components/popover-data-received/popover-data-received';
import { LoginPage } from '../pages/login/login';

//Firebase
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { CreateUserPage } from '../pages/create-user/create-user';
import { HistoricalWeekPage } from '../pages/historical-week/historical-week';
const firebaseConfig = {
  apiKey: "AIzaSyDKXEOesB0ozX7pQFGRZpRebaeeqngAybI",
  authDomain: "honduraspandas.firebaseapp.com",
  databaseURL: "https://honduraspandas.firebaseio.com",
  projectId: "honduraspandas",
  storageBucket: "honduraspandas.appspot.com",
  messagingSenderId: "943707193701"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClientsPage,
    ReceiptViewPage,
    ControlPedazosPage,
    RangeNumbersPage,
    TicketsPage,
    TicketDetailPage,
    ConsolidatedPage,
    HistoricalPage,
    HistoricalDetailPage,
    HistoricalTicketDetailPage,
    ReceiveDataPage,
    PopoverDataReceivedComponent,
    LoginPage,
    CreateUserPage,
    HistoricalWeekPage
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig, 'honduraspandas'),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClientsPage,
    ReceiptViewPage,
    ControlPedazosPage,
    RangeNumbersPage,
    TicketsPage,
    TicketDetailPage,
    ConsolidatedPage,
    HistoricalPage,
    HistoricalDetailPage,
    HistoricalTicketDetailPage,
    ReceiveDataPage,
    PopoverDataReceivedComponent,
    LoginPage,
    CreateUserPage,
    HistoricalWeekPage
  ],
  providers: [
    Clipboard,
    StatusBar,
    SplashScreen,
    AuxiliarService,
    SocialSharing,
    SQLite,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DatabaseProvider
  ]
})
export class AppModule { }
