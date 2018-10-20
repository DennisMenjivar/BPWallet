import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { User } from '../../_models/User.model';
import { DatabaseProvider } from '../../providers/database/database';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // tasksRef: AngularFireList<any>;
  // tasks: Observable<any[]>;

  user: User = new User(0, 0, '', '', '', 0, 0, 0);


  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public loadingCtrl: LoadingController, public databaseFirebase: AngularFireDatabase, public database: DatabaseProvider) {
  }

  // createNewUser(username: string, pName: string, pPassword: string, pKind: number, pWholesaler: string) {
  //   let usersRef = this.databaseFirebase.database.ref('Users');
  //   var usernameRef = usersRef.child(username);

  //   //Cuerpo del username
  //   var idRef = usernameRef.child('ID').set('0');
  //   var name = usernameRef.child('Name').set(pName);
  //   var password = usernameRef.child('Password').set(pPassword);
  //   var kind = usernameRef.child('Kind').set(pKind.toString());
  //   var licenses = usernameRef.child('Licenses').set('0');
  //   var status = usernameRef.child('Status').set('0');
  //   var Wholesaler = usernameRef.child('Wholesaler').set(pWholesaler);
  //   var lastConnection = usernameRef.child('LastConnection').set(new Date().toDateString());
  // }

  close() {
    this.LoginMessage('Bienvenido', 'Sera un placer servirle ' + this.user.username);
    this.viewCtrl.dismiss();
  }
  // this.createNewUser('Dennisaguilar', 'Dennis Aguilar', 'aguilar', 0, 'Ivan Sierra', 'Pendiente');
  // this.createNewUser('Mariarodriguez', 'Maria Rodriguez', 'rodriguez', 0, 'Arturo Avila', '9979-4450');
  validate(username: string, password: string) {
    this.createNewUser('javier.diaz', 'Javier Diaz', '12345', 0, 'BPWallet', '9999-9999');
    this.createNewUser('luis.aquino', 'Luis Aquino', '12345', 0, 'BPWallet', '9999-9999');
    let u = username.trim();
    let p = password.trim();
    var valid = 0;
    if (this.validateFirebaseUser(u, p) == 1) {
      valid = 1;
    }
    if (valid == 1) {
      this.user.password = password;
      this.user.username = username;
      this.database.loginStatus = 1;
      this.createSQLITEUser(this.user);
      this.close();
    } else {
      this.LoginMessage('Error', 'Usuario ó Contraseña Incorrecto!');
    }
  }

  validateFirebaseUser(username: string, password: string): number {
    var vali = 0;
    let usersRef = this.databaseFirebase.database.ref(`Users/${username}`).on('value', function (snap) {
      if (snap.child('Password').val() == password && snap.child('Licenses').val() == 0) {
        snap.child('Licenses').ref.set('1');
        vali = 1;
        return 1;
      }
    })
    return vali;
  }

  // validateUserAndPassword(username: string, password: string) {
  //   let usersRef = this.databaseFirebase.database.ref(`Users/${username}`).on('value', function (snap) {
  //     if (snap) {
  //       if (snap.child('Password').val() == password) {
  //         // console.log("Entra Perfectamente!");
  //       } else {
  //         console.log("La contrasena es incorrecta");
  //       }
  //     } else {
  //       console.log("El Usuario que ingreso es invalido");
  //     }
  //   });
  // }

  // getUsersTest() {
  //   var users = [];
  //   let usersRef = this.databaseFirebase.database.ref('Users/dennisMenjivar').on('value', function (snap) {
  //     console.log("Password: ", snap.child('Password').val());
  //     users.push(snap.val()); // Push children to a local users array
  //   });;
  // }

  createNewUser(username: string, pName: string, pPassword: string, pKind: number, pWholesaler: string, pTelephoneNumber: string) {
    let usersRef = this.databaseFirebase.database.ref('Users');
    var usernameRef = usersRef.child(username);

    usersRef.child('Correlative').transaction(function (i) {
      //Cuerpo del username
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

  // createStructure() {
  //   let de = this.databaseFirebase.database.ref('Users');

  //   var usersRef = de.child('davidAvila');
  //   var nombre = usersRef.child('nombre').set('David Avila');
  // }

  ionViewDidLoad() {
    this.validateFirebaseUser('', '');
  }

  LoginMessage(title: string, msg: string) {
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

  createSQLITEUser(user: User) {
    this.database.createUser(user);
  }

}
