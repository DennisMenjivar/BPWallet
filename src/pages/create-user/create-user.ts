import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../_models/User.model';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {

  user: User = new User(0, 0, '', '', '', 0, 0, 0);
  whosaler: string = '';
  telephoneNumber: string = '';

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public databaseFirebase: AngularFireDatabase, public database: DatabaseProvider) {
  }

  ionViewDidLoad() {

  }

  createNewUser(username: string, pName: string, pPassword: string, pKind: number, pWholesaler: string, pTelephoneNumber: string) {
    let usersRef = this.databaseFirebase.database.ref('Users');
    var usernameRef = usersRef.child(username);

    usersRef.child('Correlative').transaction(function (i) {
      var idRef = usernameRef.child('ID').set(i);
      var name = usernameRef.child('Name').set(pName);
      var password = usernameRef.child('Password').set(pPassword);
      var kind = usernameRef.child('Kind').set(pKind.toString());
      var licenses = usernameRef.child('Licenses').set('0');
      var status = usernameRef.child('Status').set('0');
      var Wholesaler = usernameRef.child('Wholesaler').set(pWholesaler);
      var lastConnection = usernameRef.child('LastConnection').set(new Date().toDateString());
      var telephoneNumber = usernameRef.child('TelephoneNumber').set(pTelephoneNumber);
      return i + 1;
    });
  }

  validateUser(username: string, pName: string, pPassword: string, pKind: number, pWholesaler: string, pTelephoneNumber: string) {
    this.createNewUser('Dennisaguilar', 'Dennis Aguilar', 'aguilar', 0, 'Ivan Sierra', 'Pendiente');
    // let usersSearc = this.databaseFirebase.database.ref(`Users/${username}`).on('value', function (snap) {
    //   if (snap.exists()) {
    //     this.createUserMessage('Alerta', 'Usuario ya existe!')
    //   } else {
    //     this.createNewUser(username, pName, pPassword, pKind, pWholesaler, pTelephoneNumber);
    //   }
    // });
  }

  createUserMessage(title: string, msg: string) {
    let alert = this.alertCtrl.create({
      title: title,
      message: msg,
      buttons: [
        {
          text: 'Aceptar',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    alert.present();
  }

}
