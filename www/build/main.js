webpackJsonp([14],{

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Closure; });
var Closure = /** @class */ (function () {
    function Closure(id, description, date, status, total, id_user, user, winningNumber, totalWinning, totalPorcentWinnigSeller, id_control) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.status = status;
        this.total = total;
        this.id_user = id_user;
        this.user = user;
        this.winningNumber = winningNumber;
        this.totalWinning = totalWinning;
        this.totalPorcentWinnigSeller = totalPorcentWinnigSeller;
        this.id_control = id_control;
    }
    return Closure;
}());

//# sourceMappingURL=Closure.model.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = /** @class */ (function () {
    function User(id, id_user, username, password, name, kind, license, status) {
        this.id = id;
        this.id_user = id_user;
        this.username = username;
        this.password = password;
        this.name = name;
        this.kind = kind;
        this.license = license;
        this.status = status;
    }
    return User;
}());

//# sourceMappingURL=User.model.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__receipt_view_receipt_view__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ClientsPage = /** @class */ (function () {
    function ClientsPage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.clients = null;
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.miDiaria = navParams.data.pDiaria;
        this.ReceiptView = __WEBPACK_IMPORTED_MODULE_2__receipt_view_receipt_view__["a" /* ReceiptViewPage */];
    }
    ClientsPage.prototype.ionViewDidLoad = function () {
        this.getAllClients();
    };
    ClientsPage.prototype.createNewClient = function () {
        var _this = this;
        this.database.CreateClient('General', '9999-9999', 'San Pedro Sula', 'general@gmail.com').then(function (data) {
            _this.getAllClients();
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    ClientsPage.prototype.getAllClients = function () {
        var _this = this;
        this.database.getAllClients().then(function (data) {
            _this.clients = data;
            // console.log("Data: ", data);
        }, function (error) {
            console.log("Error: ", error);
        });
    };
    ClientsPage.prototype.goToReceiptView = function (telephone) {
        var params = {
            pDiaria: this.miDiaria,
            pTelephone: telephone
        };
        this.navCtrl.push(this.ReceiptView, params);
    };
    ClientsPage.prototype.selectedClient = function (client) {
        // this.showToast("Cliente: " + client.name);
        this.miDiaria.id_client = client.id;
        this.miDiaria.client = client.name;
        this._auxiliarService.diariaDetalle.forEach(function (element) {
            element.id_client = client.id; //id
            element.client = client.name;
        });
        // console.log("Clients: ", this._auxiliarService.diariaDetalle);
        this.goToReceiptView(client.telephone);
    };
    ClientsPage.prototype.doRefresh = function (refresher) {
        this.getAllClients();
        refresher.complete();
    };
    ClientsPage.prototype.showToast = function (msg) {
        this.loader.dismiss();
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ClientsPage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });
        this.loader.present();
    };
    ClientsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clients',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/clients/clients.html"*/'<!--\n  Generated template for the ClientsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Clientes</ion-title>\n    <ion-buttons end *ngIf="clients == null">\n      <button ion-button icon-only (click)="createNewClient()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n\n      <!-- <button ion-button icon-only (click)="action2()">\n        <ion-icon name="trash"></ion-icon>\n      </button> -->\n    </ion-buttons>\n\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <!-- <ion-list>\n    <ion-item *ngFor="let c of clients" (click)="selectedClient(c)">\n      <h2>{{c.name}}</h2>\n      <p>Tel Fijo : {{c.telephone}}</p>\n      <p>Dirección: {{c.address}}</p>\n    </ion-item>\n  </ion-list> -->\n\n\n  <ion-list *ngIf="clients">\n    <ion-item-sliding *ngFor="let client of clients">\n      <ion-item (click)="selectedClient(client)">\n        <!-- <ion-avatar item-start>\n          <img src="img/slimer.png">\n        </ion-avatar> -->\n        <h2>{{client.name}}</h2>\n        <p>Tel: {{client.telephone}}</p>\n        <p>Dirección: {{client.address}}</p>\n      </ion-item>\n      <ion-item-options side="left">\n        <button ion-button color="primary">\n          <ion-icon name="text"></ion-icon>\n          Text\n        </button>\n        <button ion-button color="secondary">\n          <ion-icon name="call"></ion-icon>\n          Call\n        </button>\n      </ion-item-options>\n      <ion-item-options side="right">\n        <button ion-button color="primary">\n          <ion-icon name="mail"></ion-icon>\n          Email\n        </button>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/clients/clients.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__lib_auxiliar_service__["a" /* AuxiliarService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], ClientsPage);
    return ClientsPage;
}());

//# sourceMappingURL=clients.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiptViewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_DiariaControl_model__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../home/home';

//library for social-sharing


var ReceiptViewPage = /** @class */ (function () {
    function ReceiptViewPage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database, socialSharing, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.lenght = 0;
        this.currentDate = new Date();
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        // this.Home = HomePage;
        this.telephone = navParams.data.pTelephone;
        this.miDiaria = navParams.data.pDiaria;
        this.miDiariaControl = new __WEBPACK_IMPORTED_MODULE_5__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, _auxiliarService.miClosure.id);
        this.getLenght();
    }
    ReceiptViewPage.prototype.ionViewDidLoad = function () {
    };
    ReceiptViewPage.prototype.getLenght = function () {
        var _this = this;
        this.database.getDiariaLenght().then(function (data) {
            _this.lenght = data.id + 1;
        });
    };
    ReceiptViewPage.prototype.updateStock = function () {
        var _this = this;
        this._auxiliarService.stocks.forEach(function (element) {
            _this.database.editStock(element).then(function (data) {
            }, function (error) {
                console.log("Error al modificar stock", error);
            });
        });
    };
    ReceiptViewPage.prototype.compileData = function (viaWhatsapp) {
        var _this = this;
        this.miDiariaControl.total = this.getTotal();
        this.miDiariaControl.id_client = this.miDiaria.id_client;
        this.miDiariaControl.client = this.miDiaria.client;
        this.miDiariaControl.date = String(this.currentDate);
        this.miDiariaControl.id_closure = this._auxiliarService.miClosure.id;
        var statusVar = -1;
        var myControlID = 0;
        this._auxiliarService.totalDataToSendViaWhatsapp = '';
        this.database.CreateDiariaControl(this.miDiariaControl).then(function (control) {
            control.client = _this.miDiaria.client;
            myControlID = control.id;
            _this._auxiliarService.totalDataToSendViaWhatsapp += control.toStringToReceiptView();
        }).then(function (data) {
            _this._auxiliarService.diariaDetalle.forEach(function (element) {
                element.id_control = myControlID;
                element.status = 0;
                element.id_closure = _this._auxiliarService.miClosure.id;
                _this.database.CreateDiariaDetalle(element).then(function (detalle) {
                    element.id = detalle.id;
                    statusVar = 0;
                });
                _this._auxiliarService.totalDataToSendViaWhatsapp += element.toStringReceiptView();
                statusVar = 0;
            });
        }).then(function (data) {
            if (statusVar == 0) {
                _this.updateStock();
                if (viaWhatsapp == 1) {
                    _this.whatsappShare(_this._auxiliarService.totalDataToSendViaWhatsapp);
                }
                _this.showToast("Guardado con éxito!!");
                _this._auxiliarService.totalTicket = 0;
                _this._auxiliarService.diariaDetalle = [];
                _this.navCtrl.popToRoot();
            }
            else {
                _this.showToast("ERROR al guardar.");
            }
        });
    };
    // <ion-fab top right >
    // <button ion - fab(click)="play(diaria)" color = "primary" >
    //   <label style="font-weight: bold;" > x{ { diaria.plays } } </label>
    //     < /button>
    //     < /ion-fab>
    ReceiptViewPage.prototype.play = function (dt) {
        if (dt.plays == 3) {
            dt.plays = 1;
        }
        else {
            dt.plays++;
        }
    };
    ReceiptViewPage.prototype.loadStock = function () {
        var _this = this;
        this._auxiliarService.stocks = [];
        this.database.getStock().then(function (data) {
            _this._auxiliarService.stocks = data;
        }, function (error) {
            console.log("Error al consultar: ", error);
        });
    };
    ReceiptViewPage.prototype.updateStockByNumber = function (number, pPedazos) {
        this._auxiliarService.stocks.forEach(function (element) {
            if (number == element.number) {
                element.pedazos += pPedazos;
            }
        });
    };
    ReceiptViewPage.prototype.goToCreateNumber = function () {
        // var params = {
        //   pDiaria: this.miDiaria
        // };
        // this.navCtrl.setRoot(HomePage);
        this.navCtrl.popToRoot();
        // this.navCtrl.pop();
        // this.navCtrl.pop();
        // this.navCtrl.push(this.Home, params);
    };
    ReceiptViewPage.prototype.delete = function () {
        this.loadStock();
        this.navCtrl.popToRoot();
        this._auxiliarService.diariaDetalle = [];
        this._auxiliarService.totalTicket = 0;
        this.showToast("El Ticket ha sido eliminado!");
    };
    ReceiptViewPage.prototype.deleteNumber = function (index) {
        var miChi = this._auxiliarService.diariaDetalle.indexOf(index, 0);
        if (miChi > -1) {
            this.updateStockByNumber(index.number, index.lempiras);
            this._auxiliarService.totalTicket -= index.lempiras;
            this._auxiliarService.diariaDetalle.splice(miChi, 1);
            this.showToast("Numero: " + index.number + " Eliminado!!");
        }
        if (this._auxiliarService.diariaDetalle.length <= 0) {
            this._auxiliarService.totalTicket = 0;
            this.navCtrl.popToRoot();
            this.showToast("El Ticket ha sido eliminado!");
        }
    };
    ReceiptViewPage.prototype.whatsappShare = function (msg) {
        // this.socialSharing.shareViaWhatsAppToReceiver(this.telephone, msg, null, null);
        this.socialSharing.shareViaWhatsApp(msg, null, null);
    };
    ReceiptViewPage.prototype.doRefresh = function (refresher) {
        refresher.complete();
    };
    ReceiptViewPage.prototype.showToast = function (msg) {
        this.loader.dismiss();
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ReceiptViewPage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });
        this.loader.present();
    };
    ReceiptViewPage.prototype.showConfirmMessage = function () {
        this.presentConfirm("Finalizar", "Desea finalizar la venta?", "Solo Guardar", "Enviar y Guardar");
    };
    ReceiptViewPage.prototype.getTotal = function () {
        var total = 0;
        this._auxiliarService.diariaDetalle.forEach(function (element) {
            total += element.lempiras;
        });
        return total;
    };
    ReceiptViewPage.prototype.presentConfirm = function (title, message, accept, cancel) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: title,
            message: message,
            buttons: [
                {
                    text: accept,
                    handler: function () {
                        _this.compileData(0);
                    }
                },
                {
                    text: 'Guardar y Enviar',
                    handler: function () {
                        _this.compileData(1);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.showToast("Cancelado!");
                    }
                }
            ]
        });
        alert.present();
    };
    ReceiptViewPage.prototype.presentConfirmDeleteData = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar',
            message: 'Esta seguro que desea eliminar Ticket?',
            buttons: [
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.delete();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    ReceiptViewPage.prototype.presentConfirmDeleteByNumber = function (diaria) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar',
            message: 'Esta seguro que desea eliminar el #' + diaria.number + '?',
            buttons: [
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteNumber(diaria);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    ReceiptViewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receipt-view',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/receipt-view/receipt-view.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{miDiaria.client}}</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToCreateNumber()">\n        {{_auxiliarService.diariaDetalle.length}}\n        <ion-icon name="add"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full outline disabled color="dark">Ticket # {{_auxiliarService.miClosure.id}}-{{this.lenght}} | {{currentDate | date: \'dd/MM/yyyy\'}}</button>\n  <ion-card *ngFor="let diaria of _auxiliarService.diariaDetalle; let i = index;">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 100px; margin: 0%; padding: 0%; border: 0%">\n            {{diaria.number | number:\'2.0-0\'}}\n          </ion-card-header>\n          <!-- [innerHtml]=chica.lempiras  -->\n          <ion-card-content style="color: #488aff; font-size: 30px; margin: 0%; padding: 0%; border: 0%">\n            {{diaria.lempiras | currency:\'Lps.\':true:\'1.2-2\'}}\n            <ion-fab bottom right>\n              <button ion-fab (click)="presentConfirmDeleteByNumber(diaria)" color="danger">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-fab>\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <button ion-button full outline disabled color="dark">Total: {{this.getTotal() | currency:\'Lps.\':true:\'1.2-2\'}}</button>\n  <button ion-button full outline (click)="showConfirmMessage()">Finalizar Ticket</button>\n  <button ion-button full outline color="danger" (click)="presentConfirmDeleteData()">Eliminar Ticket</button>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/receipt-view/receipt-view.html"*/,
            styles: ['receipt-view.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReceiptViewPage);
    return ReceiptViewPage;
}());

//# sourceMappingURL=receipt-view.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConsolidatedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Closure_model__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







//library for social-sharing


var ConsolidatedPage = /** @class */ (function () {
    function ConsolidatedPage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database, alertCtrl, socialSharing) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.socialSharing = socialSharing;
        this.miDate = new Date();
        this.activeContainer = true;
        this.totalToSend = 0;
        this.JSdata = '';
        this.myDate = String(new Date());
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.getConsolidated();
    }
    ConsolidatedPage.prototype.ionViewDidLoad = function () {
    };
    ConsolidatedPage.prototype.validateDate = function () {
        var today = new Date();
        var dd = today.getDate();
        if (dd == 15 && this._auxiliarService.miClosure.description == 'Mañana' || dd == 15 && this.database.loginStatus == 0) {
            this.database.deleteUsers();
        }
    };
    ConsolidatedPage.prototype.getConsolidated = function () {
        var _this = this;
        this.consolidated = [];
        this.database.getConsolidatedFinal(0)
            .then(function (data) {
            if (data) {
                _this.totalToSend = _this.database.totalTotalConsolidated;
                _this.consolidated = data;
                _this.loadJSONDataToSend();
                _this.loader.dismiss();
            }
        });
    };
    ConsolidatedPage.prototype.whatsappShare = function (msg) {
        this.socialSharing.shareViaWhatsApp(msg, null, null);
    };
    ConsolidatedPage.prototype.sendJSONDATA = function () {
        this.whatsappShare(this.JSdata);
    };
    ConsolidatedPage.prototype.loadJSONDataToSend = function () {
        var dataToSend = [];
        var dataToSendTodo = [];
        this.consolidated.forEach(function (element) {
            dataToSend.push({
                number: element.number,
                lempiras: element.lempiras,
            });
        });
        dataToSendTodo.push({
            seller: this.database.user.username,
            closure: this._auxiliarService.miClosure.id,
            total: this.totalToSend,
            numbers: dataToSend
        });
        this.JSdata = JSON.stringify(dataToSendTodo);
    };
    ConsolidatedPage.prototype.sendNormalData = function () {
        var total = 0;
        var dataToSend = '';
        this.consolidated.forEach(function (element) {
            total += element.lempiras;
            dataToSend += element.toStringNormal();
        });
        dataToSend += ("Total: " + total);
        this.whatsappShare(dataToSend);
    };
    ConsolidatedPage.prototype.sendCSVData = function () {
        var dataToSend = '';
        this.consolidated.forEach(function (element) {
            dataToSend += element.toStringCSV();
        });
        this.whatsappShare(dataToSend);
    };
    ConsolidatedPage.prototype.createClosureFinish = function (pPorcent) {
        var _this = this;
        this.validateDate();
        var totalTotal = this.database.totalTotalConsolidated;
        var porcent = totalTotal * (pPorcent / 100);
        var closure = new __WEBPACK_IMPORTED_MODULE_7__models_Closure_model__["a" /* Closure */](this._auxiliarService.miClosure.id, '', this.myDate, 0, totalTotal, 0, this.database.user.username, -1, 0, porcent, 0);
        this.database.createClosureFinish(closure).then(function (data) {
            if (data) {
                // this.sendCSVData();
                //this._auxiliarService.miClosure = data;
                for (var index = 0; index < 100; index++) {
                    _this.database.createStock(index).then(function (data) {
                        _this.getConsolidated();
                        _this.activeContainer = false;
                    });
                }
            }
            _this.presentLoading("Procesando, Porfavor espere..");
        });
    };
    ConsolidatedPage.prototype.porcentMessage = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        // Cancelar
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        if (data.porcent) {
                            var porcent = data.porcent;
                            _this.presentConfirm(porcent);
                        }
                        else {
                            _this.porcentMessage();
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    ConsolidatedPage.prototype.presentConfirm = function (porcent) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Cierre",
            message: "Esta seguro que desea hacer cierre?",
            buttons: [
                {
                    text: 'Guardar y Enviar',
                    handler: function () {
                        _this.presentConfirmViaSendData(porcent);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.showToast("Cancelado!");
                    }
                }
            ]
        });
        alert.present();
    };
    ConsolidatedPage.prototype.presentConfirmViaSendData = function (porcent) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Formato",
            message: "En que formato desea enviar la información?",
            buttons: [
                {
                    text: 'BPWallet',
                    handler: function () {
                        _this.sendJSONDATA();
                        _this.createClosureFinish(porcent);
                    }
                },
                {
                    text: 'Normal',
                    handler: function () {
                        _this.sendNormalData();
                        _this.createClosureFinish(porcent);
                    }
                },
                {
                    text: 'Excel',
                    handler: function () {
                        _this.sendCSVData();
                        _this.createClosureFinish(porcent);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.showToast("Cancelado!");
                    }
                }
            ]
        });
        alert.present();
    };
    ConsolidatedPage.prototype.doRefresh = function (refresher) {
        this.getConsolidated();
        refresher.complete();
    };
    ConsolidatedPage.prototype.showToast = function (msg) {
        this.loader.dismiss();
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 700
        });
        toast.present();
    };
    ConsolidatedPage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
            duration: 120000
        });
        this.loader.present();
    };
    ConsolidatedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-consolidated',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/consolidated/consolidated.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="porcentMessage()" *ngIf="consolidated.length > 0 && JSdata != \'\'">\n        <ion-icon class="share-icon" name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Cierre actual</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <div class="container" style="margin: 0%; border: 0%; padding: 0%; width: 100%; height: 55%" *ngIf="activeContainer">\n    <div class="row">\n      <ion-card>\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-card-header style="color: black; font-size: 19px; margin: 0%; padding: 0%; border: 0%">\n                Cierre # {{_auxiliarService.miClosure.id}} {{_auxiliarService.miClosure.description}}\n              </ion-card-header>\n            </ion-col>\n            <ion-col>\n              <ion-card-header style="color: black; font-size: 13px; margin: 0%; padding: 0%; border: 0%; text-align: right;">\n                {{myDate | date: \'dd/MM/yyyy hh:mm\'}}\n              </ion-card-header>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-card-content style="color: black; font-size: 18px; margin: 0%; padding: 0%; border: 0%" *ngIf="database.user != null">\n                Usuario: {{database.user.username}}\n              </ion-card-content>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%">\n                Total: {{database.totalTotalConsolidated | currency:\'Lps.\':true:\'1.2-2\'}}\n              </ion-card-content>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n    <div class="row">\n      <ion-grid>\n        <ion-row>\n          <ion-col *ngFor="let b of consolidated">\n            <button large ion-button style="background-color: aquamarine;width: 100%; margin: 0%; padding: 0%; border: 0%;height: 100%; color: black">{{b.number | number:\'2.0-0\'}}|{{b.lempiras}}</button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n    </div>\n    <div class="row">\n      <button ion-button full outline disabled color="dark">Total: {{database.totalTotalConsolidated | currency:\'Lps.\':true:\'1.2-2\'}}</button>\n    </div>\n  </div>\n  <div class="row" *ngIf="!activeContainer">\n    <button ion-button full outline disabled color="dark">Cierre exitoso</button>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/consolidated/consolidated.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_social_sharing__["a" /* SocialSharing */]])
    ], ConsolidatedPage);
    return ConsolidatedPage;
}());

//# sourceMappingURL=consolidated.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ControlPedazosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__range_numbers_range_numbers__ = __webpack_require__(173);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ControlPedazosPage = /** @class */ (function () {
    function ControlPedazosPage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.RangeNumber = __WEBPACK_IMPORTED_MODULE_4__range_numbers_range_numbers__["a" /* RangeNumbersPage */];
    }
    ControlPedazosPage.prototype.ionViewDidLoad = function () {
        this.initialize();
    };
    ControlPedazosPage.prototype.ionViewDidEnter = function () {
        this.getPedazos();
        this.loader.dismiss();
    };
    ControlPedazosPage.prototype.getPedazos = function () {
        var _this = this;
        this.pedazos = [];
        this.database.getPedazos().then(function (data) {
            _this.pedazos = data;
        }, function (error) {
            console.log("Error al consultar: ", error);
        });
    };
    ControlPedazosPage.prototype.initialize = function () {
        this.getPedazos();
    };
    ControlPedazosPage.prototype.goToRangeNumber = function () {
        // this.initialize();
        var params = {
            pPedazos: this.pedazos
        };
        this.navCtrl.push(this.RangeNumber, params);
    };
    // createPedazos() {
    //   let status: boolean = false;
    //   let cont: number = 0;
    //   while (cont < 100) {
    //     let miPedazo: Pedazo = new Pedazo(0, cont, 100, 0);
    //     this.database.createPedazo(miPedazo).then((data) => {
    //       status = true;
    //     }, (error) => {
    //       console.log("Error al crear: ", error);
    //     });
    //     cont++;
    //   }
    //   if (status = true) {
    //     this.showToast("Numeros creados correctamente.")
    //   } else {
    //     this.showToast("Error al crear numeros.")
    //   }
    // }
    ControlPedazosPage.prototype.doRefresh = function (refresher) {
        this.getPedazos();
        refresher.complete();
    };
    ControlPedazosPage.prototype.showToast = function (msg) {
        this.loader.dismiss();
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    ControlPedazosPage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });
        this.loader.present();
    };
    ControlPedazosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-control-pedazos',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/ControlPedazos/control-pedazos/control-pedazos.html"*/'<!--\n  Generated template for the ControlPedazosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Configurar límites</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="goToRangeNumber()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n\n      <!-- <button ion-button icon-only (click)="action2()">\n        <ion-icon name="trash"></ion-icon>\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <ion-card *ngFor="let ped of pedazos; let i = index;">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 100px; margin: 0%; padding: 0%; border: 0%">\n            {{ped.number | number:\'2.0-0\'}}\n          </ion-card-header>\n          <!-- [innerHtml]=chica.lempiras  -->\n          <ion-card-content style="color: #488aff; font-size: 30px; margin: 0%; padding: 0%; border: 0%">{{ped.pedazos | currency:\'Lps.\':true:\'1.2-2\'}}</ion-card-content>\n          <!-- <button ion-button icon-only (click)="compileData()" color="primary" clear>\n              <ion-icon class="share-icon" name="logo-whatsapp"></ion-icon>\n            </button> -->\n        </ion-col>\n        <!-- <ion-col>\n          </ion-col> -->\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/ControlPedazos/control-pedazos/control-pedazos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], ControlPedazosPage);
    return ControlPedazosPage;
}());

//# sourceMappingURL=control-pedazos.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeNumbersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__models_Pedazo_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the RangeNumbersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RangeNumbersPage = /** @class */ (function () {
    function RangeNumbersPage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.from = null;
        this.until = null;
        this.amount = null;
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.pedazos = navParams.data.pPedazos;
    }
    RangeNumbersPage.prototype.createPedazos = function () {
        this.presentLoading("Espere un momento, por favor..");
        this.pedazos = [];
        var status = false;
        var cont = 0;
        var date = String(new Date());
        var idClosure = this._auxiliarService.miClosure.id;
        while (cont < 100) {
            var miPedazo = new __WEBPACK_IMPORTED_MODULE_0__models_Pedazo_model__["a" /* Pedazo */](0, cont, 10000, idClosure);
            this.database.createPedazo(miPedazo).then(function (data) {
                status = true;
            }, function (error) {
                console.log("Error al crear: ", error);
            });
            cont++;
        }
        if (status = true) {
            this.showToast("Numeros creados correctamente.");
            this.navCtrl.pop();
        }
        else {
            this.showToast("Error al crear numeros.");
        }
    };
    RangeNumbersPage.prototype.setNumbers = function () {
        if (this.from != null && this.until != null) {
            this.conditionRange(this.from, this.until, this.amount);
        }
        else if (this.from == null) {
            this.showToast("Ingrese un rango por favor.");
        }
    };
    RangeNumbersPage.prototype.conditionRange = function (from, until, amount) {
        var _this = this;
        this.presentLoading("Por favor espere..");
        this.database.getDiariaLenghtByStatus()
            .then(function (data) {
            if (data) {
                _this.presentAlert();
            }
            else {
                _this.setNumberRange(from, until, amount);
            }
        });
    };
    RangeNumbersPage.prototype.presentAlert = function () {
        var alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'No puede configurar números cuando tiene Tickets ya vendidos.',
            buttons: ['Dismiss']
        });
        alert.present();
    };
    RangeNumbersPage.prototype.setNumberRange = function (from, until, amount) {
        var status = 0;
        var cont = from;
        while (cont <= until) {
            var miPedazo = new __WEBPACK_IMPORTED_MODULE_0__models_Pedazo_model__["a" /* Pedazo */](0, cont, amount, 0);
            this.database.editPedazoAndStocking(miPedazo).then(function (data) {
                if (data) {
                    status == 1;
                }
            });
            cont++;
        }
        if (status = 1) {
            this.showToast("Numeros editados correctamente.");
            this.navCtrl.pop();
        }
    };
    RangeNumbersPage.prototype.ionViewDidLoad = function () {
    };
    RangeNumbersPage.prototype.doRefresh = function (refresher) {
        // this.getPedazos();
        refresher.complete();
    };
    RangeNumbersPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 800
        });
        toast.present();
    };
    RangeNumbersPage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg,
            duration: 9000
        });
        this.loader.present();
    };
    RangeNumbersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-range-numbers',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/ControlPedazos/range-numbers/range-numbers.html"*/'<!--\n  Generated template for the RangeNumbersPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <ion-title>Editar Numeros</ion-title>\n    <ion-buttons end *ngIf="pedazos == null">\n      <button ion-button icon-only (click)="createPedazos()">\n        <ion-icon name="add"></ion-icon>\n      </button>\n\n      <!-- <button ion-button icon-only (click)="action2()">\n            <ion-icon name="trash"></ion-icon>\n          </button> -->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <ion-input type="tel" [value]="from" [(ngModel)]="from" placeholder="Desde" clearInput></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="tel" [value]="until" [(ngModel)]="until" placeholder="Hasta" clearInput></ion-input>\n  </ion-item>\n  <ion-item>\n    <ion-input type="tel" [value]="amount" [(ngModel)]="amount" placeholder="Cantidad" clearInput></ion-input>\n  </ion-item>\n\n  <button ion-button full outline (click)="setNumbers()" *ngIf="from != null">Finalizar</button>\n\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/ControlPedazos/range-numbers/range-numbers.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__lib_auxiliar_service__["a" /* AuxiliarService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */]])
    ], RangeNumbersPage);
    return RangeNumbersPage;
}());

//# sourceMappingURL=range-numbers.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalWeekPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__HistoricalTodo_historical_historical__ = __webpack_require__(98);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var HistoricalWeekPage = /** @class */ (function () {
    function HistoricalWeekPage(navCtrl, navParams, _auxiliarService, toastCtrl, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.database = database;
        this.hostorial = __WEBPACK_IMPORTED_MODULE_6__HistoricalTodo_historical_historical__["a" /* HistoricalPage */];
        this.getClosures();
    }
    HistoricalWeekPage.prototype.ionViewDidLoad = function () {
    };
    HistoricalWeekPage.prototype.getClosures = function () {
        var _this = this;
        this.closures = [];
        this.database.getWeekClosures().then(function (data) {
            if (data) {
                _this.closures = data;
            }
        });
    };
    HistoricalWeekPage.prototype.goToHistorical = function (closure) {
        var params = {
            pWeekClosure: closure
        };
        this.navCtrl.push(this.hostorial, params);
    };
    HistoricalWeekPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 800
        });
        toast.present();
    };
    HistoricalWeekPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historical-week',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/historical-week/historical-week.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Historial Semanal</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let closure of closures" (click)="goToHistorical(closure)">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 19px; margin: 0%; padding: 0%; border: 0%">\n            Cierre Semanal #{{closure.id}} {{closure.description}}\n          </ion-card-header>\n        </ion-col>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 13px; margin: 0%; padding: 0%; border: 0%; text-align: right;">\n            {{closure.date | date: \'dd/MM/yyyy hh:mm\'}}\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n            Total vendido: {{closure.total | currency:\'Lps.\':true:\'1.2-2\'}}\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%;">\n            Total comisión: {{closure.totalPorcentWinnigSeller | currency:\'Lps.\':true:\'1.2-2\'}}\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card-content style="color: tomato; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%">\n            Total ganado: {{closure.totalWinning | currency:\'Lps.\':true:\'1.2-2\'}}\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/historical-week/historical-week.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], HistoricalWeekPage);
    return HistoricalWeekPage;
}());

//# sourceMappingURL=historical-week.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__historical_ticket_detail_historical_ticket_detail__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//library for social-sharing

var HistoricalDetailPage = /** @class */ (function () {
    function HistoricalDetailPage(navCtrl, navParams, _auxiliarService, database, socialSharing, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.database = database;
        this.socialSharing = socialSharing;
        this.alertCtrl = alertCtrl;
        this.option = 'Tickets';
        this.JSdata = '';
        this.miClosure = this.navParams.data.pClosure;
        this.TicketDetailPage = __WEBPACK_IMPORTED_MODULE_4__historical_ticket_detail_historical_ticket_detail__["a" /* HistoricalTicketDetailPage */];
        this.getDiariaControl();
    }
    HistoricalDetailPage.prototype.getTotal = function () {
        var total = 0;
        this.diariaControl.forEach(function (element) {
            total += element.total;
        });
        return total;
    };
    HistoricalDetailPage.prototype.editClosure = function () {
        if (this.miClosure.status == 1) {
            this.presentPrompt(this.miClosure);
        }
    };
    HistoricalDetailPage.prototype.presentPrompt = function (closure) {
        var _this = this;
        var cPorcent = (closure.totalPorcentWinnigSeller / closure.total) * 100;
        var totalWinNumber = this.getTotalWinByNumber(closure.winningNumber);
        var multiplicated = closure.totalWinning / totalWinNumber;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        // Cancelar
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        closure.winningNumber = data.number;
                        var totalPorcent = closure.total * (data.porcent / 100);
                        _this._auxiliarService.statusDelete = 1;
                        _this.database.updateWinningNumber(closure, data.multipler, totalPorcent).then(function (data) {
                            if (data) {
                                closure.totalWinning = data;
                                // this.showToast("Número ganador ingresado.")
                            }
                            _this.navCtrl.popToRoot();
                        });
                    }
                }
            ]
        });
        alert.present();
    };
    HistoricalDetailPage.prototype.getConsolidated = function () {
        var _this = this;
        this.consolidated = [];
        this.database.getConsolidatedFinalByClosure(this.miClosure.id)
            .then(function (data) {
            if (data) {
                _this.consolidated = data;
                _this.loadJSONDataToSend();
            }
        });
    };
    HistoricalDetailPage.prototype.getTotalWinByNumber = function (winNumber) {
        var total = 0;
        this.consolidated.forEach(function (element) {
            if (winNumber == element.number) {
                total = element.lempiras;
                return;
            }
        });
        return total;
    };
    HistoricalDetailPage.prototype.getDiariaControl = function () {
        var _this = this;
        this.diariaControl = [];
        this.database.getDiariaControlByIDClosure(this.miClosure.id).then(function (data) {
            _this.diariaControl = data;
            _this.getTicketsWinning();
            _this.getConsolidated();
        }, function (error) {
            console.log("Error al consultar: ", error);
        });
    };
    HistoricalDetailPage.prototype.getTicketsWinning = function () {
        var _this = this;
        this.database.getTicketWin(this.miClosure.winningNumber, this.miClosure.id).then(function (data) {
            if (data) {
                data.forEach(function (elementData) {
                    _this.diariaControl.forEach(function (elementControl) {
                        if (elementData == elementControl.id) {
                            elementControl.win = 1;
                            return;
                        }
                    });
                });
            }
        });
    };
    HistoricalDetailPage.prototype.ionViewDidLoad = function () {
    };
    HistoricalDetailPage.prototype.whatsappShare = function (msg) {
        this.socialSharing.shareViaWhatsApp(msg, null, null);
    };
    HistoricalDetailPage.prototype.sendJSONDATA = function () {
        this.whatsappShare(this.JSdata);
    };
    HistoricalDetailPage.prototype.loadJSONDataToSend = function () {
        var totalToSend = this.getTotal();
        var dataToSend = [];
        var dataToSendTodo = [];
        this.consolidated.forEach(function (element) {
            dataToSend.push({
                number: element.number,
                lempiras: element.lempiras,
            });
        });
        dataToSendTodo.push({
            seller: this.database.user.username,
            closure: this.miClosure.id,
            total: totalToSend,
            numbers: dataToSend
        });
        this.JSdata = JSON.stringify(dataToSendTodo);
    };
    HistoricalDetailPage.prototype.sendNormalData = function () {
        var total = 0;
        var dataToSend = '';
        this.consolidated.forEach(function (element) {
            total += element.lempiras;
            dataToSend += element.toStringNormal();
        });
        dataToSend += ("Total: " + total);
        this.whatsappShare(dataToSend);
    };
    HistoricalDetailPage.prototype.sendCSVData = function () {
        var dataToSend = '';
        this.consolidated.forEach(function (element) {
            dataToSend += element.toStringCSV();
        });
        this.whatsappShare(dataToSend);
    };
    HistoricalDetailPage.prototype.presentConfirmViaSendData = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Formato",
            message: "En que formato desea enviar la información?",
            buttons: [
                {
                    text: 'Panda',
                    handler: function () {
                        _this.sendJSONDATA();
                    }
                },
                {
                    text: 'Normal',
                    handler: function () {
                        _this.sendNormalData();
                    }
                },
                {
                    text: 'Excel',
                    handler: function () {
                        _this.sendCSVData();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    HistoricalDetailPage.prototype.ticketSelected = function (control) {
        var params = {
            pControl: control,
            pWinningNumber: this.miClosure.winningNumber
        };
        this.navCtrl.push(this.TicketDetailPage, params);
    };
    HistoricalDetailPage.prototype.goToSeeTicketDetail = function () {
    };
    HistoricalDetailPage.prototype.doRefresh = function (refresher) {
        this.getDiariaControl();
        refresher.complete();
    };
    HistoricalDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historical-detail',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/HistoricalTodo/historical-detail/historical-detail.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentConfirmViaSendData()">\n        <ion-icon class="share-icon" name="send"></ion-icon>\n      </button>\n    </ion-buttons>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tickets Cierre #{{miClosure.id}}</ion-title>\n  </ion-navbar>\n  <ion-segment [(ngModel)]="option">\n    <ion-segment-button value="Tickets">\n      Tickets\n    </ion-segment-button>\n    <ion-segment-button value="Historical">\n      Consolidado\n    </ion-segment-button>\n  </ion-segment>\n</ion-header>\n\n\n<ion-content padding>\n\n  <div [ngSwitch]="option">\n    <div *ngSwitchCase="\'Tickets\'">\n      <ion-card (click)="ticketSelected(diaria)" *ngFor="let diaria of diariaControl; let i = index;">\n        <ion-grid>\n          <ion-row>\n            <ion-col>\n              <ion-card-header style="color: black; font-size: 20px; margin: 0%; padding: 0%; border: 0%">\n                Ticket # {{diaria.id}}\n              </ion-card-header>\n              <ion-card-content style="color: black; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n                Cliente: {{diaria.client}}\n              </ion-card-content>\n            </ion-col>\n            <ion-col>\n              <ion-card-header style="color: black; font-size: 15px; margin: 0%; padding: 0%; border: 0%; text-align: right;">\n                {{diaria.date | date: \'dd/MM/yyyy hh:mm\'}}\n              </ion-card-header>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col>\n              <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n                Total: {{diaria.total | currency:\'Lps.\':true:\'1.2-2\'}}\n              </ion-card-content>\n            </ion-col>\n            <ion-col>\n              <ion-buttons end>\n                <button ion-button icon-only color="tomato" clear *ngIf="diaria.win == 1">\n                  <ion-icon class="share-icon" name="star"></ion-icon>\n                </button>\n              </ion-buttons>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-card>\n    </div>\n    <div *ngSwitchCase="\'Historical\'">\n      <div class="container" style="margin: 0%; border: 0%; padding: 0%; width: 100%; height: 55%">\n        <div class="row">\n          <ion-card (click)="editClosure()">\n            <ion-grid>\n              <ion-row>\n                <ion-col>\n                  <ion-card-header style="color: black; font-size: 19px; margin: 0%; padding: 0%; border: 0%">\n                    Cierre # {{miClosure.id}} {{miClosure.description}}\n                  </ion-card-header>\n                </ion-col>\n                <ion-col>\n                  <ion-card-header style="color: black; font-size: 13px; margin: 0%; padding: 0%; border: 0%; text-align: right;">\n                    {{miClosure.date | date: \'dd/MM/yyyy hh:mm\'}}\n                  </ion-card-header>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%">\n                    Total Vendido: {{getTotal() | currency:\'Lps.\':true:\'1.2-2\'}}\n                  </ion-card-content>\n                </ion-col>\n              </ion-row>\n              <ion-row>\n                <ion-col>\n                  <ion-card-content style="color: tomato; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%">\n                    Total ganado: {{miClosure.totalWinning | currency:\'Lps.\':true:\'1.2-2\'}}\n                    <ion-card-content *ngIf="miClosure.winningNumber != -1" style="color: tomato; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%; text-align: right;">\n                      NG: {{miClosure.winningNumber | number:\'2.0-0\'}}\n                    </ion-card-content>\n                  </ion-card-content>\n                </ion-col>\n                <!-- <ion-col *ngIf="closure.winningNumber != 0">\n                  <ion-card-content style="color: tomato; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%; text-align: right;">\n                    NG: {{closure.winningNumber | number:\'2.0-0\'}}\n                  </ion-card-content>\n                </ion-col> -->\n              </ion-row>\n            </ion-grid>\n          </ion-card>\n        </div>\n        <div class="row">\n          <ion-grid>\n            <ion-row>\n              <ion-col *ngFor="let b of consolidated">\n                <button large ion-button style="background-color: aquamarine;width: 100%; margin: 0%; padding: 0%; border: 0%;height: 100%; color: black">{{b.number | number:\'2.0-0\'}}|{{b.lempiras}}</button>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </div>\n        <!-- <div class="row">\n          <button ion-button full outline disabled color="dark">Total: {{database.totalTotalConsolidated | currency:\'Lps.\':true:\'1.2-2\'}}</button>\n        </div> -->\n      </div>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/HistoricalTodo/historical-detail/historical-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HistoricalDetailPage);
    return HistoricalDetailPage;
}());

//# sourceMappingURL=historical-detail.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalTicketDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_DiariaDetalle_model__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Pedazo_model__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HistoricalTicketDetailPage = /** @class */ (function () {
    function HistoricalTicketDetailPage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.miDetalle = new __WEBPACK_IMPORTED_MODULE_4__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.miControl = navParams.data.pControl;
        this.miDetalle.id_control = this.miControl.id;
        this.getDiariaDetalle();
    }
    HistoricalTicketDetailPage.prototype.ionViewDidLoad = function () {
    };
    HistoricalTicketDetailPage.prototype.getDiariaDetalle = function () {
        var _this = this;
        this.diariaDetalle = [];
        this.database.getDiariaDetalleByIdControl(this.miDetalle).then(function (data) {
            _this.diariaDetalle = data;
            data.forEach(function (element) {
                if (_this.navParams.data.pWinningNumber == element.number) {
                    if (element.paid == 0) {
                        element.paid = 1;
                    }
                    else if (element.paid == 2) {
                        element.paid = 2;
                    }
                }
            });
        }, function (error) {
            console.log("Error al consultar: ", error);
        });
    };
    HistoricalTicketDetailPage.prototype.pay = function (diaria) {
        this.database.payNumber(diaria.id).then(function (data) {
            diaria.paid = 2;
        });
    };
    HistoricalTicketDetailPage.prototype.presentConfirmPay = function (diaria) {
        var _this = this;
        if (diaria.paid == 1) {
            var alert_1 = this.alertCtrl.create({
                title: 'Pagar',
                message: 'Desea pagar este Número?',
                buttons: [
                    {
                        text: 'SI',
                        handler: function () {
                            _this.pay(diaria);
                        }
                    },
                    {
                        text: 'NO',
                        role: 'cancel',
                        handler: function () {
                            _this.showToast("Cancelado!");
                        }
                    }
                ]
            });
            alert_1.present();
        }
    };
    HistoricalTicketDetailPage.prototype.deleteTicket = function () {
        var _this = this;
        var status = 0;
        this.diariaDetalle.forEach(function (element) {
            _this.database.removeDiariaControlByID(_this.miControl).then(function (data) {
                _this.updateStockByNumber(element.number, element.lempiras);
            });
            status == 1;
        });
        if (status = 1) {
            this.showToast("Ticket #" + this.miControl.id + " Eliminado.");
        }
    };
    HistoricalTicketDetailPage.prototype.updateStockByNumber = function (number, pPedazos) {
        var _this = this;
        var pedazo = new __WEBPACK_IMPORTED_MODULE_5__models_Pedazo_model__["a" /* Pedazo */](0, 0, 0, 0);
        this._auxiliarService.stocks.forEach(function (element) {
            if (number == element.number) {
                element.pedazos += pPedazos;
                pedazo.number = element.number;
                pedazo.pedazos = element.pedazos;
                _this.database.editStockMinus(pedazo).then(function (data) {
                });
            }
        });
    };
    HistoricalTicketDetailPage.prototype.doRefresh = function (refresher) {
        refresher.complete();
    };
    HistoricalTicketDetailPage.prototype.showToast = function (msg) {
        this.loader.dismiss();
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    HistoricalTicketDetailPage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });
        this.loader.present();
    };
    HistoricalTicketDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historical-ticket-detail',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/HistoricalTodo/historical-ticket-detail/historical-ticket-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ticket Detalle</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full outline disabled color="dark">Fecha: {{this.miControl.date | date: \'dd/MM/yyyy\'}}</button>\n  <ion-card *ngFor="let diaria of diariaDetalle let i = index;">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 100px; margin: 0%; padding: 0%; border: 0%">\n            {{diaria.number | number:\'2.0-0\'}}\n          </ion-card-header>\n          <ion-card-content style="color: rgb(20, 11, 11); font-size: 30px; margin: 0%; padding: 0%; border: 0%">\n            {{diaria.lempiras | currency:\'Lps.\':true:\'1.2-2\'}}\n            <ion-fab bottom right *ngIf="diaria.paid == 1 || diaria.paid == 2">\n              <button ion-fab (click)="presentConfirmPay(diaria)" color="danger">\n                <ion-icon *ngIf="diaria.paid == 1" name="star-outline"></ion-icon>\n                <ion-icon *ngIf="diaria.paid == 2" name="star"></ion-icon>\n              </button>\n            </ion-fab>\n          </ion-card-content>\n        </ion-col>\n        <!-- <ion-col>\n          <button ion-button icon-only *ngIf="diaria.paid == 1" color="primary" clear>\n            <ion-icon class="share-icon" name="logo-whatsapp"></ion-icon>\n          </button>\n        </ion-col> -->\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <button ion-button full outline disabled color="dark">Total: {{this.miControl.total | currency:\'Lps.\':true:\'1.2-2\'}}</button>\n  <!-- <button ion-button full outline (click)="showConfirmMessage()">Finalizar</button> -->\n  <!-- <button ion-button full outline color="danger" (click)="presentConfirmDelete()">Eliminar Ticket</button> -->\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/HistoricalTodo/historical-ticket-detail/historical-ticket-detail.html"*/,
            styles: ['historical-ticket-detail.scss'],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HistoricalTicketDetailPage);
    return HistoricalTicketDetailPage;
}());

//# sourceMappingURL=historical-ticket-detail.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(viewCtrl, navCtrl, navParams, alertCtrl, loadingCtrl, databaseFirebase, database) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseFirebase = databaseFirebase;
        this.database = database;
        // tasksRef: AngularFireList<any>;
        // tasks: Observable<any[]>;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_User_model__["a" /* User */](0, 0, '', '', '', 0, 0, 0);
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
    LoginPage.prototype.close = function () {
        this.LoginMessage('Bienvenido', 'Sera un placer servirle ' + this.user.username);
        this.viewCtrl.dismiss();
    };
    // this.createNewUser('Dennisaguilar', 'Dennis Aguilar', 'aguilar', 0, 'Ivan Sierra', 'Pendiente');
    // this.createNewUser('Mariarodriguez', 'Maria Rodriguez', 'rodriguez', 0, 'Arturo Avila', '9979-4450');
    LoginPage.prototype.validate = function (username, password) {
        this.createNewUser('javier.diaz', 'Javier Diaz', '12345', 0, 'BPWallet', '9999-9999');
        this.createNewUser('luis.aquino', 'Luis Aquino', '12345', 0, 'BPWallet', '9999-9999');
        var u = username.trim();
        var p = password.trim();
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
        }
        else {
            this.LoginMessage('Error', 'Usuario ó Contraseña Incorrecto!');
        }
    };
    LoginPage.prototype.validateFirebaseUser = function (username, password) {
        var vali = 0;
        var usersRef = this.databaseFirebase.database.ref("Users/" + username).on('value', function (snap) {
            if (snap.child('Password').val() == password && snap.child('Licenses').val() == 0) {
                snap.child('Licenses').ref.set('1');
                vali = 1;
                return 1;
            }
        });
        return vali;
    };
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
    LoginPage.prototype.createNewUser = function (username, pName, pPassword, pKind, pWholesaler, pTelephoneNumber) {
        var usersRef = this.databaseFirebase.database.ref('Users');
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
    };
    // createStructure() {
    //   let de = this.databaseFirebase.database.ref('Users');
    //   var usersRef = de.child('davidAvila');
    //   var nombre = usersRef.child('nombre').set('David Avila');
    // }
    LoginPage.prototype.ionViewDidLoad = function () {
        this.validateFirebaseUser('', '');
    };
    LoginPage.prototype.LoginMessage = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'Aceptar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    LoginPage.prototype.createSQLITEUser = function (user) {
        this.database.createUser(user);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/login/login.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="no-scroll">\n  <form>\n    <ion-list>\n      <ion-item text-center>\n        <ion-img width="192" height="192" src="assets/imgs/Panda.png" style="background-color: transparent"></ion-img>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="person" item-left></ion-icon>\n        <ion-label stacked>Usuario:</ion-label>\n        <ion-input name="username" type="text" placeholder="Usuario" [(ngModel)]="user.username"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-icon name="key" item-left></ion-icon>\n        <ion-label stacked>Contraseña:</ion-label>\n        <ion-input name="password" type="password" placeholder="Contraseña" [(ngModel)]="user.password"></ion-input>\n      </ion-item>\n    </ion-list>\n    <div padding>\n      <button ion-button block (click)="validate(user.username, user.password)">Ingresar</button>\n    </div>\n  </form>\n  <div text-center>\n    <!-- <a ion-button block clear (click)="goToSignup()">\n      Nueva cuenta\n    </a>\n    <a ion-button block clear (click)="goToResetPassword()">\n      Olvide password\n    </a> -->\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReceiveDataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_DiariaControl_model__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_DiariaDetalle_model__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_popover_data_received_popover_data_received__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ReceiveDataPage = /** @class */ (function () {
    function ReceiveDataPage(popoverCtrl, clipboard, navCtrl, navParams, database, _auxiliarService, toastCtrl, alertCtrl) {
        this.popoverCtrl = popoverCtrl;
        this.clipboard = clipboard;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
        this.cleanStatus = false;
        this.dataReceived = '';
        this.date = String(new Date());
        this.diariaControl = new __WEBPACK_IMPORTED_MODULE_3__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, 0);
        this.diariaDetalle = new __WEBPACK_IMPORTED_MODULE_4__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
        this.closure();
    }
    ReceiveDataPage.prototype.presentPopover = function (myEvent) {
        var popover = this.popoverCtrl.create(__WEBPACK_IMPORTED_MODULE_7__components_popover_data_received_popover_data_received__["a" /* PopoverDataReceivedComponent */], { datas: this.datas[0].numbers });
        popover.present({
            ev: myEvent
        });
    };
    ReceiveDataPage.prototype.paste = function () {
        var _this = this;
        this.clipboard.paste().then(function (resolve) {
            _this.dataReceived = resolve;
            _this.datas = JSON.parse(resolve);
        }, function (reject) {
            alert('Error: ' + reject);
        });
    };
    ReceiveDataPage.prototype.validateFormat = function () {
        if (this.dataReceived.indexOf('[{') > -1 && this.dataReceived.indexOf('}]') > -1) {
            return true;
        }
        return false;
    };
    ReceiveDataPage.prototype.reloadJSONDATA = function () {
        var _this = this;
        if (this.validateFormat()) {
            if (this.getTotalValidated() == this.datas[0].total) {
                this.datas = JSON.parse(this.dataReceived);
                this.diariaControl.id_closure = this._auxiliarService.miClosure.id;
                this.diariaControl.date = this.date;
                this.diariaControl.client = this.datas[0].seller;
                this.diariaControl.total = this.datas[0].total;
                this.database.CreateDiariaControl(this.diariaControl).then(function (control) {
                    for (var _i = 0, _a = _this.datas[0].numbers; _i < _a.length; _i++) {
                        var d = _a[_i];
                        _this.diariaDetalle = new __WEBPACK_IMPORTED_MODULE_4__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
                        _this.diariaDetalle.id_closure = _this._auxiliarService.miClosure.id;
                        _this.diariaDetalle.number = d.number;
                        _this.diariaDetalle.lempiras = d.lempiras;
                        _this.diariaDetalle.client = d.seller;
                        _this.diariaDetalle.id_control = control.id;
                        _this.diariaDetalle.date = _this.date;
                        _this.database.CreateFastDiariaDetalle(_this.diariaDetalle);
                    }
                });
                this.dataReceived = '';
                this.messageBox('Exito', 'Datos ingresados correctamente!');
            }
            else {
                this.messageBox('PELIGRO', 'Los totales no concuerdan, por favor comuniquese con su vendedor.');
            }
        }
        else {
            this.messageBox('ERROR', 'El formato es incorrecto');
        }
        this.cleanStatus = true;
    };
    ReceiveDataPage.prototype.getTotalValidated = function () {
        var total = 0;
        for (var _i = 0, _a = this.datas[0].numbers; _i < _a.length; _i++) {
            var d = _a[_i];
            total += d.lempiras;
        }
        return total;
    };
    ReceiveDataPage.prototype.closure = function () {
        var _this = this;
        this.database.getClosureID().then(function (data) {
            if (data) {
                _this._auxiliarService.closureStatus = true;
                _this._auxiliarService.miClosure = data;
            }
            else {
                _this.presentConfirmCreateClosure();
            }
        });
    };
    ReceiveDataPage.prototype.presentConfirmCreateClosure = function () {
        var _this = this;
        var miDate = new Date();
        this._auxiliarService.miClosure.date = String(miDate);
        this._auxiliarService.miClosure.status = 0;
        var alert = this.alertCtrl.create({
            title: "Apertura",
            message: "Que Jornada desea Configurar?",
            buttons: [
                {
                    text: "Mañana",
                    handler: function () {
                        _this._auxiliarService.miClosure.description = "Mañana";
                        _this.createClosure();
                    }
                },
                {
                    text: 'Tarde',
                    handler: function () {
                        _this._auxiliarService.miClosure.description = "Tarde";
                        _this.createClosure();
                    }
                },
                {
                    text: 'Noche',
                    handler: function () {
                        _this._auxiliarService.miClosure.description = "Noche";
                        _this.createClosure();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.presentConfirmCreateClosure();
                    }
                }
            ]
        });
        alert.present();
    };
    ReceiveDataPage.prototype.presentConfirmInsertData = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: "Ingresar Datos",
            message: "Esta seguro que desea ingresar estos datos?",
            buttons: [
                {
                    text: "SI",
                    handler: function () {
                        _this.reloadJSONDATA();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        // NO
                    }
                }
            ]
        });
        alert.present();
    };
    ReceiveDataPage.prototype.createClosure = function () {
        var _this = this;
        this.database.createClosure(this._auxiliarService.miClosure).then(function (data) {
            if (data) {
                _this._auxiliarService.miClosure = data;
                _this._auxiliarService.closureStatus = true;
                _this.showToast("Jornada " + data.description + " creada correctamente." + " #" + data.id);
            }
        });
    };
    ReceiveDataPage.prototype.ionViewDidLoad = function () {
    };
    ReceiveDataPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 600
        });
        toast.present();
    };
    ReceiveDataPage.prototype.doRefresh = function (refresher) {
        this.datas = null;
        this.dataReceived = '';
        this.cleanStatus = false;
        refresher.complete();
    };
    ReceiveDataPage.prototype.messageBox = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'Aceptar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    ReceiveDataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-receive-data',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/receive-data/receive-data.html"*/'<!--\n  Generated template for the ReceiveDataPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Recibir Datos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="presentPopover($event)">\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding style="margin: 0%; border: 0%; padding: 0%; width: 100%; height: 100%" class="no-scroll">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n\n  <div class="container" style="margin: 1%; border: 0%; padding: 0%; width: 100%; height: 10%">\n    <button ion-button full outline (click)="paste()" *ngIf="dataReceived == \'\' && cleanStatus == false">Pegar</button>\n    <button ion-button full outline (click)="presentConfirmInsertData()" *ngIf="dataReceived != \'\' && cleanStatus == false">Procesar Información</button>\n    <button ion-button full outline (click)="doRefresh()" *ngIf="cleanStatus == true">Limpiar</button>\n  </div>\n  <!-- <div class="container" style="margin: 0%; border: 0%; padding: 0%; width: 100%; height: 100%">\n    <div class="container" style="margin: 0%; border: 0%; padding: 0%; width: 100%; height: 80%">\n      <ion-item style="margin: 0%; border: 0%; padding: 0%; width: 100%; height: 100%">\n        <ion-textarea placeholder="Ingrese los datos recibidos" *ngIf="dataReceived != \'\'" [(ngModel)]="dataReceived" disabled="true"></ion-textarea>\n      </ion-item>\n    </div>\n  </div> -->\n  <ion-card *ngIf="datas">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 20px; margin: 0%; padding: 0%; border: 0%">\n            Cierre #{{datas[0].closure}}\n          </ion-card-header>\n          <ion-card-content style="color: black; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n            Vendedor: {{datas[0].seller}}\n          </ion-card-content>\n          <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n            Total Vendido: {{datas[0].total | currency:\'Lps.\':true:\'1.2-2\'}}\n          </ion-card-content>\n        </ion-col>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 13px; margin: 0%; padding: 0%; border: 0%; text-align: right;">\n            Fecha: {{date | date: \'dd/MM/yyyy hh:mm\'}}\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/receive-data/receive-data.html"*/,
            styles: ['receive-data.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* PopoverController */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_clipboard__["a" /* Clipboard */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_5__lib_auxiliar_service__["a" /* AuxiliarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ReceiveDataPage);
    return ReceiveDataPage;
}());

//# sourceMappingURL=receive-data.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_DiariaDetalle_model__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_Pedazo_model__ = __webpack_require__(62);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { Http } from '@angular/http'; // don't forget to import HttpModule in app.module.ts




/**
 * Generated class for the TicketDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TicketDetailPage = /** @class */ (function () {
    function TicketDetailPage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.miDetalle = new __WEBPACK_IMPORTED_MODULE_6__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.miControl = navParams.data.pControl;
        this.miDetalle.id_control = this.miControl.id;
        this.getDiariaDetalle();
    }
    TicketDetailPage.prototype.ionViewDidLoad = function () {
    };
    TicketDetailPage.prototype.getDiariaDetalle = function () {
        var _this = this;
        this.diariaDetalle = [];
        this.database.getDiariaDetalleByIdControl(this.miDetalle).then(function (data) {
            _this.diariaDetalle = data;
        }, function (error) {
            console.log("Error al consultar: ", error);
        });
    };
    TicketDetailPage.prototype.deleteTicket = function () {
        var _this = this;
        var status = 0;
        this.diariaDetalle.forEach(function (element) {
            _this.database.removeDiariaControlByID(_this.miControl).then(function (data) {
                _this.updateStockByNumber(element.number, element.lempiras);
            });
            status == 1;
        });
        if (status = 1) {
            this._auxiliarService.statusDelete = 1;
            this.showToast("Ticket #" + this.miControl.id + " Eliminado.");
        }
    };
    TicketDetailPage.prototype.updateStockByNumber = function (number, pPedazos) {
        var _this = this;
        var pedazo = new __WEBPACK_IMPORTED_MODULE_7__models_Pedazo_model__["a" /* Pedazo */](0, 0, 0, 0);
        this._auxiliarService.stocks.forEach(function (element) {
            if (number == element.number) {
                element.pedazos += pPedazos;
                pedazo.number = element.number;
                pedazo.pedazos = element.pedazos;
                _this.database.editStockMinus(pedazo).then(function (data) {
                });
            }
        });
    };
    TicketDetailPage.prototype.doRefresh = function (refresher) {
        refresher.complete();
    };
    TicketDetailPage.prototype.showToast = function (msg) {
        this.loader.dismiss();
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000
        });
        toast.present();
    };
    TicketDetailPage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });
        this.loader.present();
    };
    TicketDetailPage.prototype.presentConfirmDelete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Eliminar Ticket',
            message: 'Esta seguro que desea eliminar?',
            buttons: [
                {
                    text: 'Eliminar',
                    handler: function () {
                        _this.deleteTicket();
                        _this.navCtrl.pop();
                        // this.compileData(1);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.showToast("Cancelado!");
                    }
                }
            ]
        });
        alert.present();
    };
    TicketDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-ticket-detail',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/TicketsTodo/ticket-detail/ticket-detail.html"*/'<!--\n  Generated template for the TicketDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ticket # {{this.miControl.id_closure}}-{{this.miControl.id}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <button ion-button full outline disabled color="dark">Fecha: {{this.miControl.date | date: \'dd/MM/yyyy\'}}</button>\n  <ion-card *ngFor="let diaria of diariaDetalle let i = index;">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 100px; margin: 0%; padding: 0%; border: 0%">\n            {{diaria.number | number:\'2.0-0\'}}\n          </ion-card-header>\n          <!-- [innerHtml]=chica.lempiras  -->\n          <ion-card-content style="color: #488aff; font-size: 30px; margin: 0%; padding: 0%; border: 0%">\n            {{diaria.lempiras | currency:\'Lps.\':true:\'1.2-2\'}}\n            <!-- <ion-fab bottom right>\n              <button ion-fab color="danger">\n                <ion-icon name="trash"></ion-icon>\n              </button>\n            </ion-fab> -->\n          </ion-card-content>\n          <!-- <button ion-button icon-only (click)="compileData()" color="primary" clear>\n                <ion-icon class="share-icon" name="logo-whatsapp"></ion-icon>\n              </button> -->\n        </ion-col>\n        <!-- <ion-col>\n            </ion-col> -->\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <button ion-button full outline disabled color="dark">Total: {{this.miControl.total | currency:\'Lps.\':true:\'1.2-2\'}}</button>\n  <!-- <button ion-button full outline (click)="showConfirmMessage()">Finalizar</button> -->\n  <button ion-button full outline color="danger" (click)="presentConfirmDelete()">Eliminar Ticket</button>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/TicketsTodo/ticket-detail/ticket-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], TicketDetailPage);
    return TicketDetailPage;
}());

//# sourceMappingURL=ticket-detail.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TicketsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_DiariaControl_model__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ticket_detail_ticket_detail__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TicketsPage = /** @class */ (function () {
    function TicketsPage(navCtrl, navParams, _auxiliarService, database) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.database = database;
        this.TicketDetailPage = __WEBPACK_IMPORTED_MODULE_7__ticket_detail_ticket_detail__["a" /* TicketDetailPage */];
        this.getDiariaControl();
    }
    TicketsPage.prototype.ionViewDidEnter = function () {
        if (this._auxiliarService.statusDelete == 1) {
            this.getDiariaControl();
            this._auxiliarService.statusDelete = 0;
        }
    };
    TicketsPage.prototype.getTotal = function () {
        var total = 0;
        this.diariaControl.forEach(function (element) {
            total += element.total;
        });
        return total;
    };
    TicketsPage.prototype.getDiariaControl = function () {
        var _this = this;
        this.miControl = new __WEBPACK_IMPORTED_MODULE_6__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, 0);
        this.diariaControl = [];
        this.database.getDiariaControlByStatus(this.miControl).then(function (data) {
            _this.diariaControl = data;
        }, function (error) {
            console.log("Error al consultar: ", error);
        });
    };
    TicketsPage.prototype.ionViewDidLoad = function () {
    };
    TicketsPage.prototype.ticketSelected = function (control) {
        var params = {
            pControl: control
        };
        this.navCtrl.push(this.TicketDetailPage, params);
    };
    TicketsPage.prototype.goToSeeTicketDetail = function () {
    };
    TicketsPage.prototype.doRefresh = function (refresher) {
        this.getDiariaControl();
        refresher.complete();
    };
    TicketsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tickets',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/TicketsTodo/tickets/tickets.html"*/'<!--\n  Generated template for the TicketsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Tickets</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding style="padding: 0%; margin: 0%; border: 0%;  width: 100%; height: 100%">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <button ion-button full outline disabled color="dark">Cierre # {{_auxiliarService.miClosure.id}} {{_auxiliarService.miClosure.description}}</button>\n  <ion-card (click)="ticketSelected(diaria)" *ngFor="let diaria of diariaControl; let i = index;">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 20px; margin: 0%; padding: 0%; border: 0%">\n            Ticket # {{diaria.id_closure}}-{{diaria.id}}\n          </ion-card-header>\n          <ion-card-content style="color: black; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n            Cliente: {{diaria.client}}\n          </ion-card-content>\n          <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n            Total: {{diaria.total | currency:\'Lps.\':true:\'1.2-2\'}}\n          </ion-card-content>\n          <!-- <button ion-button icon-only (click)="compileData()" color="primary" clear>\n                <ion-icon class="share-icon" name="logo-whatsapp"></ion-icon>\n              </button> -->\n        </ion-col>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 13px; margin: 0%; padding: 0%; border: 0%; text-align: right;">\n            {{diaria.date | date: \'dd/MM/yyyy hh:mm\'}}\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n  <button ion-button full outline disabled color="dark">Total: {{this.getTotal() | currency:\'Lps.\':true:\'1.2-2\'}}</button>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/TicketsTodo/tickets/tickets.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */]])
    ], TicketsPage);
    return TicketsPage;
}());

//# sourceMappingURL=tickets.js.map

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 191;

/***/ }),

/***/ 20:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatabaseProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Pedazo_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_DiariaDetalle_model__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_DiariaControl_model__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__models_Closure_model__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__models_Consolidated_model__ = __webpack_require__(418);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__models_User_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__models_WeekClosure_model__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





// import { DataChica } from '../../_models/DataChica.model';








var DatabaseProvider = /** @class */ (function () {
    function DatabaseProvider(platform, http, sqlite, _auxiliarService) {
        this.platform = platform;
        this.http = http;
        this.sqlite = sqlite;
        this._auxiliarService = _auxiliarService;
        this.dbReady = new __WEBPACK_IMPORTED_MODULE_4_rxjs_BehaviorSubject__["BehaviorSubject"](false);
        this.loginStatus = 0;
        //------------------------------USERS-------------------------------------
        this.user = null;
        this.totalTotalConsolidated = 0;
        this.createDataBase();
    }
    DatabaseProvider.prototype.createDataBase = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.sqlite.create({
                name: 'Panda.db',
                location: 'default'
            })
                .then(function (db) {
                _this.database = db;
                _this.createTables().then(function () {
                    //communicate we are ready!
                    _this.dbReady.next(true);
                });
            });
        });
    };
    DatabaseProvider.prototype.isReady = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            //if dbReady is true, resolve
            if (_this.dbReady.getValue()) {
                resolve();
            }
            else {
                _this.dbReady.subscribe(function (ready) {
                    if (ready) {
                        resolve();
                    }
                });
            }
        });
    };
    DatabaseProvider.prototype.createTables = function () {
        var _this = this;
        return this.database.executeSql("CREATE TABLE IF NOT EXISTS Clients \n    (id INTEGER PRIMARY KEY AUTOINCREMENT\n      , name TEXT\n      , telephone TEXT\n      , address TEXT\n      , email TEXT);", {})
            .then(function () {
            return _this.database.executeSql("CREATE TABLE IF NOT EXISTS DiariaControl \n          (id INTEGER PRIMARY KEY AUTOINCREMENT\n            , id_client INTEGER\n            , client TEXT\n            , total INTEGER\n            , date TEXT\n            , status INTEGER\n            , id_closure INTEGER);", {})
                .then(function () {
                return _this.database.executeSql("CREATE TABLE IF NOT EXISTS DiariaDetalle \n          (id INTEGER PRIMARY KEY AUTOINCREMENT\n            , id_control INTEGER\n            , number INTEGER\n            , lempiras INTEGER\n            , id_client INTEGER\n            , client TEXT\n            , date TEXT\n            , status INTEGER\n            , paid INTEGER\n            , id_closure INTEGER);", {});
            })
                .then(function () {
                return _this.database.executeSql("CREATE TABLE IF NOT EXISTS Pedazos \n                (id INTEGER PRIMARY KEY AUTOINCREMENT\n                  , number INTEGER\n                  , pedazos INTEGER\n                  , id_closure INTEGER);", {});
            }).then(function () {
                return _this.database.executeSql("CREATE TABLE IF NOT EXISTS Users\n              (id INTEGER PRIMARY KEY AUTOINCREMENT\n                , id_user INTEGER\n                , username TEXT\n                , password TEXT\n                , name TEXT\n                , kind INTEGER\n                , license INTEGER\n                , status INTEGER);", {});
            }).then(function () {
                return _this.database.executeSql("CREATE TABLE IF NOT EXISTS WeekClosure\n              (id INTEGER PRIMARY KEY AUTOINCREMENT\n                , description TEXT\n                , date TEXT\n                , status INTEGER\n                , total INTEGER\n                , id_user INTEGER\n                , user TEXT\n                , totalPorcentWinnigSeller INTEGER\n                , totalWinning INTEGER);", {});
            }).then(function () {
                return _this.database.executeSql("CREATE TABLE IF NOT EXISTS Closure\n              (id INTEGER PRIMARY KEY AUTOINCREMENT\n                , description TEXT\n                , date TEXT\n                , status INTEGER\n                , total INTEGER\n                , id_user INTEGER\n                , user TEXT\n                , winningNumber INTEGER\n                , totalWinning INTEGER\n                , totalPorcentWinnigSeller INTEGER\n                , id_control INTEGER);", {});
            }).then(function () {
                return _this.database.executeSql("CREATE TABLE IF NOT EXISTS stocktaking \n                  (id INTEGER PRIMARY KEY AUTOINCREMENT\n                  , number INTEGER\n                  , pedazos INTEGER\n                  , id_closure INTEGER);", {});
            }).catch(function (err) { return console.log("Error detected creating tables", err); });
        })
            .catch(function (err) { return console.log("Error detected creating tables", err); });
    };
    DatabaseProvider.prototype.validateUserLicence = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Users", [])
                .then(function (data) {
                if (data.rows.length) {
                    var user = new __WEBPACK_IMPORTED_MODULE_11__models_User_model__["a" /* User */](0, 0, '', '', '', 0, 0, 0);
                    user.id = data.rows.item(0).id;
                    user.id_user = data.rows.item(0).id_user;
                    user.username = data.rows.item(0).username;
                    user.password = data.rows.item(0).password;
                    user.name = data.rows.item(0).name;
                    user.kind = data.rows.item(0).kind;
                    user.license = data.rows.item(0).license;
                    user.status = data.rows.item(0).status;
                    _this.user = user;
                    return user;
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.createUser = function (user) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("INSERT INTO Users (id_user, username, password, name, kind, license, status) VALUES (" + user.id_user + ",'" + user.username + "','" + user.password + "','" + user.name + "'," + user.kind + "," + user.license + "," + user.status + "); ", {}).then(function (result) {
                _this.user = user;
                return -1;
            });
        });
    };
    DatabaseProvider.prototype.deleteUsers = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("DELETE FROM Users", []);
        });
    };
    // ----------------------------Week CLOSURE----------------------------------
    DatabaseProvider.prototype.createWeekClosure = function (closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT sum(total) AS totalT, sum(totalWinning) AS totalW, sum(totalPorcentWinnigSeller) AS totalPWS FROM Closure WHERE status = 1", {}).then(function (result) {
                return _this.database.executeSql("INSERT INTO WeekClosure (description, date, status, total, id_user, user, totalWinning, totalPorcentWinnigSeller) VALUES ('" + closure.description + "', '" + closure.date + "'," + closure.status + "," + result.rows.item(0).totalT + ", " + closure.id_user + ",'" + closure.user + "'," + result.rows.item(0).totalW + "," + result.rows.item(0).totalPWS + "); ", {}).then(function (result) {
                    if (result.insertId) {
                        return _this.database.executeSql("UPDATE Closure SET status = 2, id_control = " + result.insertId + " WHERE status = 1", {}).then(function (result) {
                            return -1;
                        });
                    }
                });
            });
        });
    };
    DatabaseProvider.prototype.getWeekClosureID = function (closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM WeekClosure WHERE id = " + closure.id + " ORDER BY id DESC", {})
                .then(function (data) {
                if (data.rows.length) {
                    return data.rows.item(0).id;
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.getWeekClosureByID = function (closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM WeekClosure WHERE id = " + closure.id + " ORDER BY id DESC", {})
                .then(function (data) {
                if (data.rows.length) {
                    var closure_1 = new __WEBPACK_IMPORTED_MODULE_12__models_WeekClosure_model__["a" /* WeekClosure */](0, '', '', 0, 0, 0, '', 0, 0);
                    closure_1.id = parseInt(data.rows.item(0).id);
                    closure_1.description = data.rows.item(0).description;
                    closure_1.date = data.rows.item(0).date;
                    closure_1.status = parseInt(data.rows.item(0).status);
                    closure_1.total = parseInt(data.rows.item(0).total);
                    closure_1.id_user = parseInt(data.rows.item(0).id_user);
                    closure_1.user = data.rows.item(0).user;
                    closure_1.totalWinning = parseInt(data.rows.item(0).winningNumber);
                    closure_1.totalPorcentWinnigSeller = parseInt(data.rows.item(0).totalPorcentWinnigSeller);
                    return closure_1;
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.getWeekClosures = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM WeekClosure WHERE status = 0 ORDER BY id DESC", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var detalle = new __WEBPACK_IMPORTED_MODULE_12__models_WeekClosure_model__["a" /* WeekClosure */](0, '', '', 0, 0, 0, '', 0, 0);
                        detalle.id = parseInt(data.rows.item(i).id);
                        detalle.description = data.rows.item(i).description;
                        detalle.date = data.rows.item(i).date;
                        detalle.status = 1;
                        detalle.id_user = parseInt(data.rows.item(i).id_user);
                        detalle.total = parseInt(data.rows.item(i).total);
                        detalle.user = data.rows.item(i).user;
                        detalle.totalPorcentWinnigSeller = parseInt(data.rows.item(i).totalPorcentWinnigSeller);
                        detalle.totalWinning = parseInt(data.rows.item(i).totalWinning);
                        lists.push(detalle);
                    }
                }
                return lists;
            });
        });
    };
    // ----------------------------CLOSURE----------------------------------
    DatabaseProvider.prototype.createClosure = function (closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("INSERT INTO Closure (description, date, status, total, id_user, user, winningNumber, totalWinning, totalPorcentWinnigSeller, id_control) VALUES ('" + closure.description + "', '" + closure.date + "'," + closure.status + "," + closure.total + ", " + closure.id_user + ",'" + closure.user + "',-1," + closure.totalWinning + "," + closure.totalPorcentWinnigSeller + "," + closure.id_control + "); ", {}).then(function (result) {
                if (result.insertId) {
                    var miClosure = new __WEBPACK_IMPORTED_MODULE_8__models_Closure_model__["a" /* Closure */](0, '', '', 0, 0, 0, '', -1, 0, 0, 0);
                    miClosure.id = parseInt(result.insertId);
                    return _this.getClosureByID(miClosure);
                }
            });
        });
    };
    DatabaseProvider.prototype.getClosureByID = function (closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Closure WHERE id = " + closure.id + " ORDER BY id DESC", [])
                .then(function (data) {
                if (data.rows.length) {
                    var closure_2 = new __WEBPACK_IMPORTED_MODULE_8__models_Closure_model__["a" /* Closure */](0, '', '', 0, 0, 0, '', 0, 0, 0, 0);
                    closure_2.id = parseInt(data.rows.item(0).id);
                    closure_2.description = data.rows.item(0).description;
                    closure_2.date = data.rows.item(0).date;
                    closure_2.status = parseInt(data.rows.item(0).status);
                    closure_2.total = parseInt(data.rows.item(0).total);
                    closure_2.id_user = parseInt(data.rows.item(0).id_user);
                    closure_2.user = data.rows.item(0).user;
                    closure_2.winningNumber = parseInt(data.rows.item(0).winningNumber);
                    closure_2.totalWinning = parseInt(data.rows.item(0).totalWinning);
                    closure_2.totalPorcentWinnigSeller = data.rows.item(0).totalPorcentWinnigSeller;
                    closure_2.id_control = data.rows.item(0).id_control;
                    return closure_2;
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.getClosureID = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Closure WHERE status = 0 ORDER BY id DESC", [])
                .then(function (data) {
                if (data.rows.length) {
                    var closure = new __WEBPACK_IMPORTED_MODULE_8__models_Closure_model__["a" /* Closure */](0, '', '', 0, 0, 0, '', 0, 0, 0, 0);
                    closure.id = parseInt(data.rows.item(0).id);
                    closure.description = data.rows.item(0).description;
                    closure.date = data.rows.item(0).date;
                    closure.totalPorcentWinnigSeller = data.rows.item(0).totalPorcentWinnigSeller;
                    return closure;
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.getClosures = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Closure WHERE status = 1 ORDER BY id DESC", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var detalle = new __WEBPACK_IMPORTED_MODULE_8__models_Closure_model__["a" /* Closure */](0, '', '', 0, 0, 0, '', 0, 0, 0, 0);
                        detalle.id = parseInt(data.rows.item(i).id);
                        detalle.description = data.rows.item(i).description;
                        detalle.date = data.rows.item(i).date;
                        detalle.status = 1;
                        detalle.id_user = parseInt(data.rows.item(i).id_user);
                        detalle.total = parseInt(data.rows.item(i).total);
                        detalle.user = data.rows.item(i).user;
                        detalle.winningNumber = parseInt(data.rows.item(i).winningNumber);
                        detalle.totalWinning = parseInt(data.rows.item(i).totalWinning);
                        detalle.totalPorcentWinnigSeller = data.rows.item(i).totalPorcentWinnigSeller;
                        detalle.id_control = data.rows.item(i).id_control;
                        lists.push(detalle);
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getClosuresByIdControl = function (id_control) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Closure WHERE id_control = " + id_control + " ORDER BY id DESC", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var detalle = new __WEBPACK_IMPORTED_MODULE_8__models_Closure_model__["a" /* Closure */](0, '', '', 0, 0, 0, '', 0, 0, 0, 0);
                        detalle.id = data.rows.item(i).id;
                        detalle.description = data.rows.item(i).description;
                        detalle.date = data.rows.item(i).date;
                        detalle.status = data.rows.item(i).status;
                        detalle.id_user = parseInt(data.rows.item(i).id_user);
                        detalle.total = parseInt(data.rows.item(i).total);
                        detalle.user = data.rows.item(i).user;
                        detalle.winningNumber = parseInt(data.rows.item(i).winningNumber);
                        detalle.totalWinning = parseInt(data.rows.item(i).totalWinning);
                        detalle.totalPorcentWinnigSeller = data.rows.item(i).totalPorcentWinnigSeller;
                        lists.push(detalle);
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.createClosureFinish = function (closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("UPDATE Closure SET status = 1, total = " + closure.total + ", date = '" + closure.date + "', totalPorcentWinnigSeller = " + closure.totalPorcentWinnigSeller + "  WHERE id = " + closure.id, {}).then(function (result) {
                return _this.database.executeSql("UPDATE DiariaControl SET status = 1 WHERE status = 0", {}).then(function (result) {
                    return _this.database.executeSql("UPDATE DiariaDetalle SET status = 1 WHERE status = 0", {}).then(function (result) {
                        _this.totalTotalConsolidated = 0;
                        return 1;
                        // return this.database.executeSql(`INSERT INTO Closure (description, date, status, total, id_user, user, winningNumber) VALUES ('${closure.description}', '${closure.date}',${closure.status},${closure.total}, ${closure.id_user},'${closure.user}',${closure.winningNumber}); `, {}).then((result) => {
                        //   if (result.insertId) {
                        //     let miClosure: Closure = new Closure(0, '', '', 0, 0, 0, '', 0);
                        //     miClosure.id = parseInt(result.insertId);
                        //     this.totalTotalConsolidated = 0;
                        //     return this.getClosureByID(miClosure);
                        //   }
                        // })
                    });
                });
            });
        });
    };
    DatabaseProvider.prototype.createStock = function (number) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Pedazos WHERE number = " + number + " ", []).then(function (result) {
                if (result.rows.length) {
                    var pedazos = parseInt(result.rows.item(0).pedazos);
                    return _this.database.executeSql("UPDATE stocktaking SET pedazos = ? WHERE number = ? ", [pedazos, number]).then(function (result) {
                        return 1;
                    });
                }
            });
        });
    };
    // -----WINNING NUMBER
    DatabaseProvider.prototype.setWinningNumber = function (closure, multipler) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("UPDATE Closure SET winningNumber = " + closure.winningNumber + " WHERE id = " + closure.id + " and status = 1", {}).then(function (result) {
                return _this.database.executeSql("SELECT sum(lempiras) AS totalW FROM DiariaDetalle WHERE number = " + closure.winningNumber + " AND id_closure = " + closure.id + " and status = 1", [])
                    .then(function (data) {
                    if (data.rows.item(0).totalW > 0) {
                        var totalWinn_1 = parseInt(data.rows.item(0).totalW) * multipler;
                        return _this.database.executeSql("UPDATE Closure SET totalWinning = " + totalWinn_1 + "  WHERE id = " + closure.id + " and status = 1", {}).then(function (result) {
                            return totalWinn_1;
                        });
                    }
                    else {
                        return _this.database.executeSql("UPDATE Closure SET totalWinning = 0 WHERE id = " + closure.id + " and status = 1", {}).then(function (result) {
                            return 0;
                        });
                    }
                });
            });
        });
    };
    DatabaseProvider.prototype.updateWinningNumber = function (closure, multipler, totalPorcent) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("UPDATE Closure SET winningNumber = " + closure.winningNumber + ", totalPorcentWinnigSeller = " + totalPorcent + " WHERE id = " + closure.id + " and status = 1", {}).then(function (result) {
                return _this.database.executeSql("SELECT sum(lempiras) AS totalW FROM DiariaDetalle WHERE number = " + closure.winningNumber + " AND id_closure = " + closure.id + " and status = 1", [])
                    .then(function (data) {
                    if (data.rows.item(0).totalW > 0) {
                        var totalWinn_2 = parseInt(data.rows.item(0).totalW) * multipler;
                        return _this.database.executeSql("UPDATE Closure SET totalWinning = " + totalWinn_2 + "  WHERE id = " + closure.id + " and status = 1", {}).then(function (result) {
                            return totalWinn_2;
                        });
                    }
                    else {
                        return _this.database.executeSql("UPDATE Closure SET totalWinning = 0 WHERE id = " + closure.id + " and status = 1", {}).then(function (result) {
                            return 0;
                        });
                    }
                });
            });
        });
    };
    DatabaseProvider.prototype.getTicketWin = function (number, id_closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaDetalle WHERE number = " + number + " AND id_closure = " + id_closure, [])
                .then(function (data) {
                var numbers = null;
                if (data.rows.length > 0) {
                    numbers = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var id_control = data.rows.item(i).id_control;
                        numbers.push(id_control);
                    }
                }
                return numbers;
            });
        });
    };
    // sumTotalwinning(winningNumber: number, id_closure: number) {
    //   return this.isReady()
    //     .then(() => {
    //       return this.database.executeSql(`SELECT sum(lempiras) AS totalW FROM DiariaDetalle WHERE number = ${winningNumber} AND id_closure = ${id_closure}`, [])
    //         .then((data) => {
    //           let total: number = 0;
    //           if (data.rows.length) {
    //             total = parseInt(data.rows.item(0).totalW);
    //           }
    //           return total;
    //         })
    //     })
    // }
    // getTicketsWinning(winningNumber: number, id_closure: number) {
    //   return this.isReady()
    //     .then(() => {
    //       return this.database.executeSql(`SELECT * FROM DiariaDetalle WHERE number = ${winningNumber} AND id_closure = ${id_closure} ORDER BY number ASC`, [])
    //         .then((data) => {
    //           let lists: Consolidated[] = [];
    //           if (data.rows.length) {
    //             for (let i = 0; i < data.rows.length; i++) {
    //               let lempiras = parseInt(data.rows.item(i).lempiras);
    //               let number = parseInt(data.rows.item(i).number);
    //               let id_control = parseInt(data.rows.item(i).id_control);
    //               lists.push(new Consolidated(0, 0, '', number, lempiras, 0, '', 0, 0));
    //             }
    //           }
    //           return lists as Consolidated[];
    //         })
    //     })
    // }
    // ----------------------------STOCKTAKING----------------------------------
    // createStock(pedazo: Pedazo) {
    //   return this.isReady()
    //     .then(() => {
    //       return this.database.executeSql(`INSERT INTO stocktaking(number, pedazos, id_closure) VALUES(${pedazo.number}, ${pedazo.pedazos}, ${pedazo.id_closure}); `, {}).then((result) => {
    //         if (result.insertId) {
    //           // console.log("Data a Guardar: ", result);
    //           return this.getStockById(result.insertId);
    //         }
    //       })
    //     });
    // }
    //-----AQUIIIII
    DatabaseProvider.prototype.editStockMinus = function (pedazo) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("UPDATE stocktaking SET pedazos = ? WHERE number = ? ", [pedazo.pedazos, pedazo.number]).then(function (result) {
                if (result.insertId) {
                    return _this.getStockById(result.insertId);
                }
            });
        });
    };
    DatabaseProvider.prototype.editStock = function (pedazo) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("UPDATE stocktaking SET pedazos = ? WHERE number = ? ", [pedazo.pedazos, pedazo.number]).then(function (result) {
                if (result.insertId) {
                    return _this.getStockById(result.insertId);
                }
            });
        });
    };
    DatabaseProvider.prototype.getStock = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM stocktaking", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var id = data.rows.item(i).id;
                        var number = data.rows.item(i).number;
                        var pedazos = data.rows.item(i).pedazos;
                        var id_closure = data.rows.item(i).id_closure;
                        var pedazo = new __WEBPACK_IMPORTED_MODULE_5__models_Pedazo_model__["a" /* Pedazo */](id, number, pedazos, id_closure);
                        lists.push(pedazo);
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getStockById = function (number) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM stocktaking WHERE number = " + number + " ", [])
                .then(function (data) {
                if (data.rows.length) {
                    return data.rows.item(0);
                }
                return null;
            });
        });
    };
    // ------------------------------PEDAZOS--------------------------------
    DatabaseProvider.prototype.createPedazo = function (pedazo) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("INSERT INTO Pedazos(number, pedazos, id_closure) VALUES(" + pedazo.number + ", " + pedazo.pedazos + ", " + pedazo.id_closure + "); ", {}).then(function (result) {
                return _this.database.executeSql("INSERT INTO stocktaking(number, pedazos, id_closure) VALUES(" + pedazo.number + ", " + pedazo.pedazos + ", " + pedazo.id_closure + "); ", {}).then(function (result) {
                    return -1;
                });
            });
        });
    };
    DatabaseProvider.prototype.getListPedazos = function (id) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Pedazos WHERE id = " + id + " ", [])
                .then(function (data) {
                if (data.rows.length) {
                    return data.rows.item(0);
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.editPedazoAndStocking = function (pedazo) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("UPDATE Pedazos SET pedazos = ? WHERE number = ? ", [pedazo.pedazos, pedazo.number]).then(function (result) {
                return _this.database.executeSql("UPDATE stocktaking SET pedazos = ? WHERE number = ? ", [pedazo.pedazos, pedazo.number]).then(function (result) {
                    return -1;
                });
            });
        });
    };
    DatabaseProvider.prototype.getPedazos = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Pedazos ORDER BY number ASC", [])
                .then(function (data) {
                var lists = null;
                if (data.rows.length) {
                    lists = [];
                    for (var i = 0; i < data.rows.length; i++) {
                        var number = data.rows.item(i).number;
                        var pedazos = data.rows.item(i).pedazos;
                        lists.push(new __WEBPACK_IMPORTED_MODULE_5__models_Pedazo_model__["a" /* Pedazo */](0, number, pedazos, 0));
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getPedazosById = function (number) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Pedazos WHERE number = " + number + " ", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        lists.push({
                            number: data.rows.item(i).number,
                            pedazos: data.rows.item(i).pedazos,
                            id_closure: data.rows.item(i).id_closure
                        });
                    }
                }
                return lists;
            });
        });
    };
    //----------------------------CONSOLIDATED------------------------
    DatabaseProvider.prototype.getConsolidatedFinal = function (pStatus) {
        var _this = this;
        this.totalTotalConsolidated = 0;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaDetalle WHERE status = " + pStatus + " ORDER BY number ASC", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length) {
                    _this.totalTotalConsolidated = 0;
                    for (var index = 0; index < 100; index++) {
                        var total = 0;
                        for (var i = 0; i < data.rows.length; i++) {
                            var lempiras = parseInt(data.rows.item(i).lempiras);
                            var number = parseInt(data.rows.item(i).number);
                            if (number == index) {
                                total += lempiras;
                                _this.totalTotalConsolidated += lempiras;
                            }
                            else {
                                continue;
                            }
                        }
                        if (total > 0) {
                            var id_closure = parseInt(data.rows.item(0).id_closure);
                            lists.push(new __WEBPACK_IMPORTED_MODULE_10__models_Consolidated_model__["a" /* Consolidated */](0, 0, '', index, total, 0, '', 0, id_closure));
                        }
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getConsolidatedFinalByClosure = function (id_closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaDetalle WHERE id_closure = " + id_closure + " and status = 1 ORDER BY number ASC", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length) {
                    for (var index = 0; index < 100; index++) {
                        var total = 0;
                        for (var i = 0; i < data.rows.length; i++) {
                            var lempiras = parseInt(data.rows.item(i).lempiras);
                            var number = parseInt(data.rows.item(i).number);
                            if (number == index) {
                                total += lempiras;
                            }
                            else {
                                continue;
                            }
                        }
                        if (total > 0) {
                            var id_closure_1 = parseInt(data.rows.item(0).id_closure);
                            lists.push(new __WEBPACK_IMPORTED_MODULE_10__models_Consolidated_model__["a" /* Consolidated */](0, 0, '', index, total, 0, '', 0, id_closure_1));
                        }
                    }
                }
                return lists;
            });
        });
    };
    //------------------DIARIA DETALLE---------------------
    DatabaseProvider.prototype.getDiariaDetalleByID = function (detalle) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaDetalle WHERE id = " + detalle.id + " and status = " + detalle.status + " ", [])
                .then(function (data) {
                if (data.rows.length) {
                    var detail = new __WEBPACK_IMPORTED_MODULE_6__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
                    detail.id = parseInt(data.rows.item(0).id);
                    detail.id_control = parseInt(data.rows.item(0).id_control);
                    detail.number = parseInt(data.rows.item(0).number);
                    detail.lempiras = parseInt(data.rows.item(0).lempiras);
                    detail.id_client = parseInt(data.rows.item(0).id_client);
                    detail.client = data.rows.item(0).client, data.rows.item(0).date;
                    detail.status = parseInt(data.rows.item(0).status);
                    detail.id_closure = parseInt(data.rows.item(0).id_closure);
                    detail.paid = parseInt(data.rows.item(0).paid);
                    return detail;
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.payNumber = function (id) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("UPDATE DiariaDetalle SET paid = 2 WHERE id = " + id, {}).then(function (result) {
                return 1;
            });
        });
    };
    DatabaseProvider.prototype.CreateFastDiariaDetalle = function (diaria) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("INSERT INTO DiariaDetalle(id_control, number, lempiras, id_client, client, date, status, id_closure, paid) VALUES(" + diaria.id_control + ", " + diaria.number + ", " + diaria.lempiras + ", " + diaria.id_client + ", '" + diaria.client + "', '" + diaria.date + "', " + diaria.status + ", " + diaria.id_closure + ", " + diaria.paid + "); ", {}).then(function (result) {
                return 1;
            });
        });
    };
    DatabaseProvider.prototype.CreateDiariaDetalle = function (diaria) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("INSERT INTO DiariaDetalle(id_control, number, lempiras, id_client, client, date, status, id_closure, paid) VALUES(" + diaria.id_control + ", " + diaria.number + ", " + diaria.lempiras + ", " + diaria.id_client + ", '" + diaria.client + "', '" + diaria.date + "', " + diaria.status + ", " + diaria.id_closure + ", " + diaria.paid + "); ", {}).then(function (result) {
                if (result.insertId) {
                    var miDiariaDetalle = new __WEBPACK_IMPORTED_MODULE_6__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
                    miDiariaDetalle.id = parseInt(result.insertId);
                    return _this.getDiariaDetalleByID(miDiariaDetalle);
                }
            });
        });
    };
    DatabaseProvider.prototype.removeDiariaDetalleByID = function (id) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("DELETE FROM DiariaDetalle WHERE id = " + id + " ", []);
        });
    };
    DatabaseProvider.prototype.removeDiariaDetalle = function (detalle) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("DELETE FROM DiariaDetalle WHERE id_control = " + detalle.id_control + " ", []);
        });
    };
    DatabaseProvider.prototype.getDiariaDetalleByStatus = function (pStatus) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaDetalle WHERE status = " + pStatus + " ", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var detalle = new __WEBPACK_IMPORTED_MODULE_6__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
                        detalle.id = parseInt(data.rows.item(i).id);
                        detalle.id_control = parseInt(data.rows.item(i).id_control);
                        detalle.lempiras = parseInt(data.rows.item(i).lempiras);
                        detalle.number = parseInt(data.rows.item(i).number);
                        detalle.id_client = parseInt(data.rows.item(i).id_client);
                        detalle.client = data.rows.item(i).client;
                        detalle.date = data.rows.item(i).date;
                        detalle.status = parseInt(data.rows.item(i).status);
                        detalle.id_closure = parseInt(data.rows.item(i).id_closure);
                        detalle.paid = parseInt(data.rows.item(i).paid);
                        lists.push(detalle);
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getDiariaDetalle = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaDetalle", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var detalle = new __WEBPACK_IMPORTED_MODULE_6__models_DiariaDetalle_model__["a" /* DiariaDetalle */](parseInt(data.rows.item(i).id), parseInt(data.rows.item(i).id_control), parseInt(data.rows.item(i).number), parseInt(data.rows.item(i).lempiras), parseInt(data.rows.item(i).id_client), data.rows.item(i).client, data.rows.item(i).date, parseInt(data.rows.item(i).status), parseInt(data.rows.item(i).id_closure), parseInt(data.rows.item(i).paid));
                        lists.push(detalle);
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getDiariaDetalleByIdControl = function (detalle) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaDetalle where id_control = " + detalle.id_control + " ", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var detalle_1 = new __WEBPACK_IMPORTED_MODULE_6__models_DiariaDetalle_model__["a" /* DiariaDetalle */](parseInt(data.rows.item(i).id), parseInt(data.rows.item(i).id_control), parseInt(data.rows.item(i).number), parseInt(data.rows.item(i).lempiras), parseInt(data.rows.item(i).id_client), data.rows.item(i).client, data.rows.item(i).date, parseInt(data.rows.item(i).status), parseInt(data.rows.item(i).id_closure), parseInt(data.rows.item(i).paid));
                        lists.push(detalle_1);
                    }
                }
                return lists;
            });
        });
    };
    // -----------------------------------DIARIA CONTROL---------------------------------------------
    DatabaseProvider.prototype.CreateDiariaControl = function (diaria) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("INSERT INTO DiariaControl(id_client, client, total, date, status, id_closure) VALUES(" + diaria.id_client + ", '" + diaria.client + "', " + diaria.total + ", '" + diaria.date + "', " + diaria.status + ", " + diaria.id_closure + "); ", {}).then(function (result) {
                if (result.insertId) {
                    var miDiariaControl = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, 0);
                    // El insertId contiene el id agregado en ese momento.
                    miDiariaControl.id = parseInt(result.insertId);
                    return _this.getDiariaControlByID(miDiariaControl);
                }
            });
        });
    };
    DatabaseProvider.prototype.getDiariaControlByID = function (control) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaControl WHERE id = " + control.id + " and status = " + control.status + " ", [])
                .then(function (data) {
                if (data.rows.length) {
                    var control_1 = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, 0);
                    control_1.id = data.rows.item(0).id;
                    control_1.id_client = data.rows.item(0).id_client;
                    control_1.client = data.rows.item(0).client;
                    control_1.total = data.rows.item(0).total;
                    control_1.date = data.rows.item(0).date;
                    control_1.status = data.rows.item(0).status;
                    control_1.id_closure = data.rows.item(0).id_closure;
                    return control_1;
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.removeDiariaControlByID = function (control) {
        var _this = this;
        return this.isReady()
            .then(function () {
            // this.database.executeSql(`UPDATE Pedazos SET number = ?, pedazos = ? WHERE number = ? `, [pedazo.number, pedazo.pedazos, pedazo.number]
            // return this.database.executeSql(`DELETE FROM DiariaControl WHERE id = ${control.id} `, [])
            return _this.database.executeSql("UPDATE DiariaControl SET status = 7 WHERE id = " + control.id + " ", [])
                .then(function () {
                // return this.database.executeSql(`DELETE FROM DiariaDetalle WHERE id_control = ${control.id}`, [])
                return _this.database.executeSql("UPDATE DiariaDetalle SET status = 7 WHERE id_control = " + control.id, []);
            });
        });
    };
    DatabaseProvider.prototype.getDiariaControlByStatus = function (control) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaControl WHERE status = " + control.status + " ORDER BY id DESC", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var control_2 = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, 0);
                        control_2.id = data.rows.item(i).id;
                        control_2.id_client = data.rows.item(i).id_client;
                        control_2.client = data.rows.item(i).client;
                        control_2.total = data.rows.item(i).total;
                        control_2.date = data.rows.item(i).date;
                        control_2.status = data.rows.item(i).status;
                        control_2.id_closure = data.rows.item(i).id_closure;
                        lists.push(control_2);
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getDiariaControlByIDClosure = function (id_closure) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaControl WHERE id_closure = " + id_closure + " and status = 1 ORDER BY id DESC", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length) {
                    for (var i = 0; i < data.rows.length; i++) {
                        var control = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, 0);
                        control.id = data.rows.item(i).id;
                        control.id_client = data.rows.item(i).id_client;
                        control.client = data.rows.item(i).client;
                        control.total = data.rows.item(i).total;
                        control.date = data.rows.item(i).date;
                        control.status = data.rows.item(i).status;
                        control.id_closure = id_closure;
                        lists.push(control);
                    }
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getDiariaLenghtByStatus = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaControl WHERE status = 0 ORDER BY id DESC LIMIT 1", [])
                .then(function (data) {
                if (data.rows.length) {
                    var control = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, 0);
                    control.id = data.rows.item(0).id;
                    // control.id_client = data.rows.item(0).id_client;
                    // control.client = data.rows.item(0).client;
                    // control.total = data.rows.item(0).total;
                    // control.date = data.rows.item(0).date;
                    // control.status = data.rows.item(0).status;
                    // control.id_closure = data.rows.item(0).id_closure;
                    return control;
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.getDiariaLenght = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM DiariaControl ORDER BY id DESC LIMIT 1", [])
                .then(function (data) {
                if (data.rows.length) {
                    var control = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaControl_model__["a" /* DiariaControl */](0, 0, '', 0, 0, 0);
                    control.id = data.rows.item(0).id;
                    // control.id_client = data.rows.item(0).id_client;
                    // control.client = data.rows.item(0).client;
                    // control.total = data.rows.item(0).total;
                    // control.date = data.rows.item(0).date;
                    // control.status = data.rows.item(0).status;
                    // control.id_closure = data.rows.item(0).id_closure;
                    return control;
                }
                return null;
            });
        });
    };
    // -----------------------------------CLIENT-------------------------------------------
    DatabaseProvider.prototype.CreateClient = function (name, telephone, address, email) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("INSERT INTO Clients(name, telephone, address, email) VALUES('" + name + "', '" + telephone + "', '" + address + "', '" + email + "'); ", {}).then(function (result) {
                if (result.insertId) {
                    return _this.getList(result.insertId);
                }
            });
        });
    };
    DatabaseProvider.prototype.getAllClients = function () {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Clients", [])
                .then(function (data) {
                var lists = [];
                if (data.rows.length > 0) {
                    for (var i = 0; i < data.rows.length; i++) {
                        lists.push({
                            id: data.rows.item(i).id,
                            name: data.rows.item(i).name,
                            telephone: data.rows.item(i).telephone,
                            address: data.rows.item(i).address,
                            email: data.rows.item(i).email
                        });
                    }
                }
                else {
                    return null;
                }
                return lists;
            });
        });
    };
    DatabaseProvider.prototype.getList = function (id) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("SELECT * FROM Clients WHERE id = " + id + " ", [])
                .then(function (data) {
                if (data.rows.length) {
                    return data.rows.item(0);
                }
                return null;
            });
        });
    };
    DatabaseProvider.prototype.deleteList = function (id) {
        var _this = this;
        return this.isReady()
            .then(function () {
            return _this.database.executeSql("DELETE FROM Clients WHERE id = " + id + " ", []);
        });
    };
    DatabaseProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_sqlite__["a" /* SQLite */], __WEBPACK_IMPORTED_MODULE_9__lib_auxiliar_service__["a" /* AuxiliarService */]])
    ], DatabaseProvider);
    return DatabaseProvider;
}());

//# sourceMappingURL=database.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuxiliarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_Closure_model__ = __webpack_require__(127);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuxiliarService = /** @class */ (function () {
    function AuxiliarService() {
        this.closureStatus = false;
        this.statusDelete = 0;
        this.miClosure = new __WEBPACK_IMPORTED_MODULE_3__models_Closure_model__["a" /* Closure */](0, '', '', 0, 0, 0, '', -1, 0, 0, 0);
        this.totalTicket = 0;
        this.totalConsolidated = 0;
        this.totalDataToSendViaWhatsapp = '';
    }
    //  current_api: string = "http://creaxisapi.creaxis.xyz/";
    //current_api: string = "http://localhost:8081/";
    //current_api: string = "http://localhost:56782/";
    /* Funciones para Interaccion con Web API */
    AuxiliarService.prototype.objectToParams = function (f) {
        var tparams = new URLSearchParams();
        for (var key in f) {
            if (f.hasOwnProperty(key)) {
                var val = f[key];
                tparams.set(key, val);
            }
        }
        return tparams;
    };
    AuxiliarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], AuxiliarService);
    return AuxiliarService;
}());

//# sourceMappingURL=auxiliar.service.js.map

/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/ControlPedazos/control-pedazos/control-pedazos.module": [
		731,
		13
	],
	"../pages/ControlPedazos/range-numbers/range-numbers.module": [
		732,
		12
	],
	"../pages/HistoricalTodo/historical-detail/historical-detail.module": [
		735,
		11
	],
	"../pages/HistoricalTodo/historical-ticket-detail/historical-ticket-detail.module": [
		736,
		10
	],
	"../pages/HistoricalTodo/historical/historical.module": [
		737,
		9
	],
	"../pages/TicketsTodo/ticket-detail/ticket-detail.module": [
		741,
		8
	],
	"../pages/TicketsTodo/tickets/tickets.module": [
		742,
		7
	],
	"../pages/clients/clients.module": [
		729,
		6
	],
	"../pages/consolidated/consolidated.module": [
		730,
		5
	],
	"../pages/create-user/create-user.module": [
		733,
		4
	],
	"../pages/historical-week/historical-week.module": [
		734,
		3
	],
	"../pages/login/login.module": [
		738,
		2
	],
	"../pages/receipt-view/receipt-view.module": [
		739,
		1
	],
	"../pages/receive-data/receive-data.module": [
		740,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 235;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeekClosure; });
var WeekClosure = /** @class */ (function () {
    function WeekClosure(id, description, date, status, total, id_user, user, totalPorcentWinnigSeller, totalWinning) {
        this.id = id;
        this.description = description;
        this.date = date;
        this.status = status;
        this.total = total;
        this.id_user = id_user;
        this.user = user;
        this.totalPorcentWinnigSeller = totalPorcentWinnigSeller;
        this.totalWinning = totalWinning;
    }
    return WeekClosure;
}());

//# sourceMappingURL=WeekClosure.model.js.map

/***/ }),

/***/ 343:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverDataReceivedComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PopoverDataReceivedComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PopoverDataReceivedComponent = /** @class */ (function () {
    function PopoverDataReceivedComponent(navParams, _viewController) {
        this.navParams = navParams;
        this._viewController = _viewController;
        this.items = this.navParams.get('datas');
    }
    PopoverDataReceivedComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'popover-data-received',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/components/popover-data-received/popover-data-received.html"*/'<ion-list>\n  <ion-list-header>Números</ion-list-header>\n  <ion-item *ngFor="let item of items">\n    {{item.number | number : \'2.0-0\'}}|{{item.lempiras}}\n  </ion-item>\n</ion-list>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/components/popover-data-received/popover-data-received.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */]])
    ], PopoverDataReceivedComponent);
    return PopoverDataReceivedComponent;
}());

//# sourceMappingURL=popover-data-received.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__clients_clients__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_ButtonCalculatorClass_model__ = __webpack_require__(728);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_Pedazo_model__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_DiariaDetalle_model__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__login_login__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database, alertCtrl, modal) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.modal = modal;
        this.option = 'Número';
        this.numberSelected = new __WEBPACK_IMPORTED_MODULE_5__models_Pedazo_model__["a" /* Pedazo */](0, 0, 0, 0);
        this.loader = this.loadingCtrl.create({
            content: "Cargando..."
        });
        this.validateUserLicence();
        this.closure();
        this.loadStock();
        this.miDiaria = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
        this.principalText = '0';
        this.Clients = __WEBPACK_IMPORTED_MODULE_2__clients_clients__["a" /* ClientsPage */];
        this.loadButtons();
        _auxiliarService.diariaDetalle = [];
        _auxiliarService.totalTicket = 0;
    }
    ;
    HomePage.prototype.loadStock = function () {
        var _this = this;
        this.database.getStock().then(function (data) {
            _this._auxiliarService.stocks = data;
        }, function (error) {
            console.log("Error al consultar: ", error);
        });
    };
    HomePage.prototype.getStockByNumber = function (pNumber) {
        var _this = this;
        this.numberSelected = new __WEBPACK_IMPORTED_MODULE_5__models_Pedazo_model__["a" /* Pedazo */](0, 0, 0, 0);
        this._auxiliarService.stocks.forEach(function (element) {
            if (element.number == pNumber) {
                _this.numberSelected = element;
            }
        });
    };
    HomePage.prototype.validatePedazo = function (pPedazos) {
        if (pPedazos <= this.numberSelected.pedazos) {
            this.updateStockByNumber(this.miDiaria.number, pPedazos);
            return true;
        }
        this.validateLimitMessageBox("Solo tiene disponible: Lps." + this.numberSelected.pedazos + ".00 del: " + this.miDiaria.number);
        return false;
    };
    HomePage.prototype.updateStockByNumber = function (number, pPedazos) {
        this._auxiliarService.stocks.forEach(function (element) {
            if (number == element.number) {
                element.pedazos -= pPedazos;
            }
        });
    };
    HomePage.prototype.loadButtons = function () {
        this.principalButtons = [];
        var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, -1, 0, -2];
        for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
            var n = numbers_1[_i];
            if (n == -1) {
                this.principalButtons.push(new __WEBPACK_IMPORTED_MODULE_3__models_ButtonCalculatorClass_model__["a" /* ButtonCalculatorClass */](n, 'AC', false));
            }
            else if (n == -2) {
                this.principalButtons.push(new __WEBPACK_IMPORTED_MODULE_3__models_ButtonCalculatorClass_model__["a" /* ButtonCalculatorClass */](n, '>', true));
            }
            else {
                this.principalButtons.push(new __WEBPACK_IMPORTED_MODULE_3__models_ButtonCalculatorClass_model__["a" /* ButtonCalculatorClass */](n, n.toString(), true));
            }
        }
    };
    HomePage.prototype.goToClients = function () {
        if (this.principalText == '0' && this.option == 'Lempiras') {
            this.showToast("Ingrese un monto, porfavor!");
        }
        else {
            var params = {
                pDiaria: this.miDiaria
            };
            this.navCtrl.push(this.Clients, params);
        }
    };
    HomePage.prototype.checkOut = function () {
        if (this.option == 'Número' && this._auxiliarService.diariaDetalle.length > 0) {
            this.goToClients();
            return;
        }
        if (this.principalText != '0' && this.option == 'Lempiras') {
            if (this.validatePedazo(parseInt(this.principalText))) {
                this.miDiaria.lempiras = parseInt(this.principalText);
                this._auxiliarService.totalTicket += parseInt(this.principalText);
                this._auxiliarService.diariaDetalle.push(this.miDiaria);
                this.showToast("Se agregó el número: " + this.miDiaria.number);
                this.goToClients();
                this.principalText = '0';
                this.option = 'Número';
                this.miDiaria = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
            }
        }
        else {
            this.showToast('Ingrese un monto, por favor!');
            return;
        }
    };
    HomePage.prototype.closure = function () {
        var _this = this;
        this.database.getClosureID().then(function (data) {
            if (data) {
                _this._auxiliarService.closureStatus = true;
                _this._auxiliarService.miClosure = data;
            }
            else {
                _this.presentConfirmCreateClosure();
            }
        });
    };
    HomePage.prototype.createClosure = function () {
        var _this = this;
        this.database.createClosure(this._auxiliarService.miClosure).then(function (data) {
            if (data) {
                _this._auxiliarService.miClosure = data;
                _this._auxiliarService.closureStatus = true;
                _this.showToast("Jornada " + data.description + " creada correctamente." + " #" + data.id);
            }
        });
    };
    HomePage.prototype.click = function (pOption) {
        if (this.option == 'Lempiras') {
            if (this.principalText.length <= 4 || pOption.id == -1 || pOption.id == -2) {
                if (pOption.id == -1) {
                    this.principalText = '0';
                }
                else if (pOption.id == -2) {
                    if (this.principalText == '0') {
                        this.showToast('Ingrese un monto, por favor!');
                        return;
                    }
                    else {
                        if (this.validatePedazo(parseInt(this.principalText))) {
                            this.principalButtons[11].name = '>';
                            this.miDiaria.lempiras = parseInt(this.principalText);
                            this._auxiliarService.totalTicket += parseInt(this.principalText);
                            this._auxiliarService.diariaDetalle.push(this.miDiaria);
                            this.showToast("Se agregó el número: " + this.miDiaria.number);
                            this.cleanPrincipal();
                        }
                    }
                }
                else {
                    if (this.principalText == '0') {
                        this.principalText = '';
                    }
                    this.principalText += pOption.id;
                }
            }
        }
        else if (this.option == 'Número') {
            if (this.principalText.length < 2 || pOption.id == -1 || pOption.id == -2) {
                if (pOption.id == -1) {
                    this.principalText = '0';
                }
                else if (pOption.id == -2) {
                    this.principalButtons[11].name = '+';
                    this.miDiaria.number = parseInt(this.principalText);
                    this.getStockByNumber(this.miDiaria.number);
                    this.option = 'Lempiras';
                    this.principalText = '0';
                }
                else {
                    if (this.principalText == '0') {
                        this.principalText = '';
                    }
                    this.principalText += pOption.id;
                }
            }
        }
        else {
            this.principalText += pOption.id;
        }
    };
    HomePage.prototype.activeModal = function () {
        var profileModal = this.modal.create(__WEBPACK_IMPORTED_MODULE_8__login_login__["a" /* LoginPage */], { userId: 8675309 });
        profileModal.present();
    };
    HomePage.prototype.validateUserLicence = function () {
        var _this = this;
        this.database.validateUserLicence().then(function (data) {
            if (data == null) {
                _this.activeModal();
            }
        });
    };
    HomePage.prototype.presentConfirmCreateClosure = function () {
        var _this = this;
        var miDate = new Date();
        this._auxiliarService.miClosure.date = String(miDate);
        this._auxiliarService.miClosure.status = 0;
        var alert = this.alertCtrl.create({
            title: "Apertura",
            message: "Que Jornada desea Configurar?",
            buttons: [
                {
                    text: "Mañana",
                    handler: function () {
                        _this._auxiliarService.miClosure.description = "Mañana";
                        _this.createClosure();
                    }
                },
                {
                    text: 'Tarde',
                    handler: function () {
                        _this._auxiliarService.miClosure.description = "Tarde";
                        _this.createClosure();
                    }
                },
                {
                    text: 'Noche',
                    handler: function () {
                        _this._auxiliarService.miClosure.description = "Noche";
                        _this.createClosure();
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.presentConfirmCreateClosure();
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.validateLimitMessageBox = function (message) {
        var alert = this.alertCtrl.create({
            title: "ADVERTENCIA",
            message: message,
            buttons: [
                {
                    text: 'Aceptar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    HomePage.prototype.showToast = function (msg) {
        this.loader.dismiss();
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1200
        });
        toast.present();
    };
    HomePage.prototype.presentLoading = function (msg) {
        this.loader = this.loadingCtrl.create({
            content: msg
        });
        this.loader.present();
    };
    HomePage.prototype.cleanPrincipal = function () {
        this.principalButtons[11].name = '>';
        this.option = "Número";
        this.principalText = '0';
        // this._auxiliarService.chicas = [];
        this.miDiaria = new __WEBPACK_IMPORTED_MODULE_7__models_DiariaDetalle_model__["a" /* DiariaDetalle */](0, 0, 0, 0, 0, '', '', 0, 0, 0);
    };
    HomePage.prototype.doRefresh = function (refresher) {
        this.cleanPrincipal();
        refresher.complete();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>BPWallet</ion-title>\n    <ion-buttons end *ngIf="option == \'Lempiras\' || _auxiliarService.diariaDetalle.length > 0">\n      <button ion-button icon-only (click)="checkOut()">\n        <!-- (click)="createNewClient()" -->\n        {{_auxiliarService.diariaDetalle.length}}\n        <ion-icon name="cash"></ion-icon>\n      </button>\n      <!-- <button ion-button icon-only (click)="action2()">\n        <ion-icon name="trash"></ion-icon>\n      </button> -->\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding style="padding: 0%; margin: 0%; border: 0%;  width: 100%; height: 100%;" class="no-scroll">\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <h3 style="text-align: left; color: #488aff; vertical-align: bottom; padding: 0%; margin: 0%; border: 0%">{{_auxiliarService.totalTicket | currency:\'Lps.\':true:\'1.2-2\'}}</h3>\n  <div class="container" style="height: 30%; padding: 0%; margin: 0%; border: 0%">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <h3 style="vertical-align: text-bottom; text-align: center; color: rgb(160, 160, 160); padding: 0%; margin: 0%; border: 0%; width: 100%; text-decoration: underline;"\n            *ngIf="this.option == \'Lempiras\'"> {{numberSelected.number | number : \'2.0-0\'}} </h3>\n          <h1 style="vertical-align: text-top; width: 100%; text-align: center;color: black; padding: 0%; margin: 0%; border: 0%" *ngIf="this.option == \'Número\'">{{principalText | number : \'2.0-0\'}}</h1>\n          <h1 style="vertical-align: text-top; width: 100%; text-align: center;color: black; padding: 0%; margin: 0%; border: 0%" *ngIf="this.option == \'Lempiras\'">{{principalText | number : \'1.0-0\'}}</h1>\n          <h5 *ngIf="option==\'Número\'" style="text-align: center;color: black; width: 100%; padding: 0%; margin: 0%; border: 0%">{{option}}</h5>\n          <h5 *ngIf="option==\'Lempiras\'" style="text-align: center;color: black; width: 100%; color: #488aff; ; padding: 0%; margin: 0%; border: 0%">{{option}}</h5>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col>\n        <h5 *ngIf="option == \'Número\'" style="text-align: right;color: black">{{option}}</h5>\n      </ion-col>\n      <ion-col>\n        <h5 *ngIf="option == \'Lempiras\'" style="text-align: left;color: #488aff ">{{option}}</h5>\n      </ion-col>\n    </ion-row>\n  </ion-grid> -->\n  <!-- <h5 style="text-align: center;color: black">{{option}}</h5> -->\n  <div class="container" style="margin: 0%; border: 0%; padding: 0%; width: 100%; height: 55%">\n    <div class="row" style="width: 100%; height: 100%">\n      <div class="col-4" *ngFor="let b of principalButtons" style="width: 33.33%; margin: 0%; padding: 0%; border: 0%">\n        <button (click)="click(b)" ion-button color="white" style="width: 100%; margin: 0%; padding: 0%; border: 0%;height: 100%; color: black">{{b.name}}</button>\n      </div>\n    </div>\n  </div>\n  <!-- <button (click)="gotoSendData()" large ion-button style="width: 100%; margin: 0%; padding: 0%; border: 0%;height: 100%; background-color: transparent; color: tomato">Send Data</button> -->\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/home/home.html"*/,
            styles: ['home.scss']
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_4__lib_auxiliar_service__["a" /* AuxiliarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_6__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateUserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_User_model__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_database_database__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateUserPage = /** @class */ (function () {
    function CreateUserPage(viewCtrl, navCtrl, navParams, alertCtrl, loadingCtrl, databaseFirebase, database) {
        this.viewCtrl = viewCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.databaseFirebase = databaseFirebase;
        this.database = database;
        this.user = new __WEBPACK_IMPORTED_MODULE_3__models_User_model__["a" /* User */](0, 0, '', '', '', 0, 0, 0);
        this.whosaler = '';
        this.telephoneNumber = '';
    }
    CreateUserPage.prototype.ionViewDidLoad = function () {
    };
    CreateUserPage.prototype.createNewUser = function (username, pName, pPassword, pKind, pWholesaler, pTelephoneNumber) {
        var usersRef = this.databaseFirebase.database.ref('Users');
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
    };
    CreateUserPage.prototype.validateUser = function (username, pName, pPassword, pKind, pWholesaler, pTelephoneNumber) {
        this.createNewUser('Dennisaguilar', 'Dennis Aguilar', 'aguilar', 0, 'Ivan Sierra', 'Pendiente');
        // let usersSearc = this.databaseFirebase.database.ref(`Users/${username}`).on('value', function (snap) {
        //   if (snap.exists()) {
        //     this.createUserMessage('Alerta', 'Usuario ya existe!')
        //   } else {
        //     this.createNewUser(username, pName, pPassword, pKind, pWholesaler, pTelephoneNumber);
        //   }
        // });
    };
    CreateUserPage.prototype.createUserMessage = function (title, msg) {
        var alert = this.alertCtrl.create({
            title: title,
            message: msg,
            buttons: [
                {
                    text: 'Aceptar',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        alert.present();
    };
    CreateUserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-create-user',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/create-user/create-user.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>CreateUser</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <form (ngSubmit)="validateUser(user.username, user.name, user.password, user.kind, whosaler, telephoneNumber)">\n    <ion-item>\n      <ion-label>Usuario</ion-label>\n      <ion-input type="text" [(ngModel)]="user.username" name="username"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Nombre</ion-label>\n      <ion-input type="text" [(ngModel)]="user.name" name="name"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Password</ion-label>\n      <ion-input type="text" [(ngModel)]="user.password" name="password"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Tipo</ion-label>\n      <ion-input type="tel" [(ngModel)]="user.kind" name="kind"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Mayorista</ion-label>\n      <ion-input type="text" [(ngModel)]="whosaler" name="whosaler"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label>Número Teléfonico</ion-label>\n      <ion-input type="tel" [(ngModel)]="telephoneNumber" name="telephoneNumber"></ion-input>\n    </ion-item>\n    <button ion-button type="submit" block>Crear Usuario</button>\n  </form>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/create-user/create-user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__providers_database_database__["a" /* DatabaseProvider */]])
    ], CreateUserPage);
    return CreateUserPage;
}());

//# sourceMappingURL=create-user.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(388);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(392);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(727);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_clients_clients__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_receipt_view_receipt_view__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_ControlPedazos_control_pedazos_control_pedazos__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_ControlPedazos_range_numbers_range_numbers__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_TicketsTodo_tickets_tickets__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_TicketsTodo_ticket_detail_ticket_detail__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_consolidated_consolidated__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_HistoricalTodo_historical_historical__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_HistoricalTodo_historical_detail_historical_detail__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_HistoricalTodo_historical_ticket_detail_historical_ticket_detail__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_receive_data_receive_data__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_toPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_22_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_sqlite__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_common_http__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_clipboard__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__components_popover_data_received_popover_data_received__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_login_login__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30_angularfire2__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_create_user_create_user__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_historical_week_historical_week__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





























//Firebase




var firebaseConfig = {
    apiKey: "AIzaSyDKXEOesB0ozX7pQFGRZpRebaeeqngAybI",
    authDomain: "honduraspandas.firebaseapp.com",
    databaseURL: "https://honduraspandas.firebaseio.com",
    projectId: "honduraspandas",
    storageBucket: "honduraspandas.appspot.com",
    messagingSenderId: "943707193701"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_clients_clients__["a" /* ClientsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_receipt_view_receipt_view__["a" /* ReceiptViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ControlPedazos_control_pedazos_control_pedazos__["a" /* ControlPedazosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ControlPedazos_range_numbers_range_numbers__["a" /* RangeNumbersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_TicketsTodo_tickets_tickets__["a" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_TicketsTodo_ticket_detail_ticket_detail__["a" /* TicketDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_consolidated_consolidated__["a" /* ConsolidatedPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_HistoricalTodo_historical_historical__["a" /* HistoricalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_HistoricalTodo_historical_detail_historical_detail__["a" /* HistoricalDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_HistoricalTodo_historical_ticket_detail_historical_ticket_detail__["a" /* HistoricalTicketDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_receive_data_receive_data__["a" /* ReceiveDataPage */],
                __WEBPACK_IMPORTED_MODULE_27__components_popover_data_received_popover_data_received__["a" /* PopoverDataReceivedComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_create_user_create_user__["a" /* CreateUserPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_historical_week_historical_week__["a" /* HistoricalWeekPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_25__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/clients/clients.module#ClientsPageModule', name: 'ClientsPage', segment: 'clients', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/consolidated/consolidated.module#ConsolidatedPageModule', name: 'ConsolidatedPage', segment: 'consolidated', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ControlPedazos/control-pedazos/control-pedazos.module#ControlPedazosPageModule', name: 'ControlPedazosPage', segment: 'control-pedazos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/ControlPedazos/range-numbers/range-numbers.module#RangeNumbersPageModule', name: 'RangeNumbersPage', segment: 'range-numbers', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/create-user/create-user.module#CreateUserPageModule', name: 'CreateUserPage', segment: 'create-user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/historical-week/historical-week.module#HistoricalWeekPageModule', name: 'HistoricalWeekPage', segment: 'historical-week', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HistoricalTodo/historical-detail/historical-detail.module#HistoricalDetailPageModule', name: 'HistoricalDetailPage', segment: 'historical-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HistoricalTodo/historical-ticket-detail/historical-ticket-detail.module#HistoricalTicketDetailPageModule', name: 'HistoricalTicketDetailPage', segment: 'historical-ticket-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/HistoricalTodo/historical/historical.module#HistoricalPageModule', name: 'HistoricalPage', segment: 'historical', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receipt-view/receipt-view.module#ReceiptViewPageModule', name: 'ReceiptViewPage', segment: 'receipt-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/receive-data/receive-data.module#ReceiveDataPageModule', name: 'ReceiveDataPage', segment: 'receive-data', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/TicketsTodo/ticket-detail/ticket-detail.module#TicketDetailPageModule', name: 'TicketDetailPage', segment: 'ticket-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/TicketsTodo/tickets/tickets.module#TicketsPageModule', name: 'TicketsPage', segment: 'tickets', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_30_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig, 'honduraspandas'),
                __WEBPACK_IMPORTED_MODULE_29_angularfire2_database__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_clients_clients__["a" /* ClientsPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_receipt_view_receipt_view__["a" /* ReceiptViewPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_ControlPedazos_control_pedazos_control_pedazos__["a" /* ControlPedazosPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_ControlPedazos_range_numbers_range_numbers__["a" /* RangeNumbersPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_TicketsTodo_tickets_tickets__["a" /* TicketsPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_TicketsTodo_ticket_detail_ticket_detail__["a" /* TicketDetailPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_consolidated_consolidated__["a" /* ConsolidatedPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_HistoricalTodo_historical_historical__["a" /* HistoricalPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_HistoricalTodo_historical_detail_historical_detail__["a" /* HistoricalDetailPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_HistoricalTodo_historical_ticket_detail_historical_ticket_detail__["a" /* HistoricalTicketDetailPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_receive_data_receive_data__["a" /* ReceiveDataPage */],
                __WEBPACK_IMPORTED_MODULE_27__components_popover_data_received_popover_data_received__["a" /* PopoverDataReceivedComponent */],
                __WEBPACK_IMPORTED_MODULE_28__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_create_user_create_user__["a" /* CreateUserPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_historical_week_historical_week__["a" /* HistoricalWeekPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_26__ionic_native_clipboard__["a" /* Clipboard */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_10__lib_auxiliar_service__["a" /* AuxiliarService */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_sqlite__["a" /* SQLite */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_23__providers_database_database__["a" /* DatabaseProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 418:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Consolidated; });
var Consolidated = /** @class */ (function () {
    function Consolidated(id, id_user, user, number, lempiras, kind, date, status, id_closure) {
        this.id = id;
        this.id_user = id_user;
        this.user = user;
        this.number = number;
        this.lempiras = lempiras;
        this.kind = kind;
        this.date = date;
        this.status = status;
        this.id_closure = id_closure;
    }
    Consolidated.prototype.toStringCSV = function () {
        return this.number + ";" + this.lempiras + "\n";
    };
    Consolidated.prototype.toStringNormal = function () {
        if (this.number == 0 || this.number == 1 || this.number == 2 || this.number == 3 || this.number == 4 || this.number == 5 || this.number == 6 || this.number == 7 || this.number == 8 || this.number == 9) {
            return "0" + this.number + "/" + this.lempiras + "\n";
        }
        return this.number + "/" + this.lempiras + "\n";
    };
    return Consolidated;
}());

//# sourceMappingURL=Consolidated.model.js.map

/***/ }),

/***/ 62:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pedazo; });
var Pedazo = /** @class */ (function () {
    function Pedazo(pId, pNumber, pPedazos, id_closure) {
        this.id = pId;
        this.number = pNumber;
        this.pedazos = pPedazos;
        this.id_closure = id_closure;
    }
    return Pedazo;
}());

//# sourceMappingURL=Pedazo.model.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiariaDetalle; });
var DiariaDetalle = /** @class */ (function () {
    function DiariaDetalle(id, id_control, number, lempiras, id_client, client, date, status, id_closure, paid) {
        this.id = id;
        this.id_control = id_control;
        this.number = number;
        this.lempiras = lempiras;
        this.id_client = id_client;
        this.client = client;
        this.date = date;
        this.status = status;
        this.id_closure = id_closure;
        this.paid = paid;
        this.plays = 1;
    }
    DiariaDetalle.prototype.toStringReceiptView = function () {
        if (this.number == 0 || this.number == 1 || this.number == 2 || this.number == 3 || this.number == 4 || this.number == 5 || this.number == 6 || this.number == 7 || this.number == 8 || this.number == 9) {
            return "Número:" + "0" + this.number + " - Lempiras:" + this.lempiras + "\n";
        }
        return "Número:" + this.number + " - Lempiras:" + this.lempiras + "\n";
    };
    return DiariaDetalle;
}());

//# sourceMappingURL=DiariaDetalle.model.js.map

/***/ }),

/***/ 727:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_ControlPedazos_control_pedazos_control_pedazos__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_TicketsTodo_tickets_tickets__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_consolidated_consolidated__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_HistoricalTodo_historical_historical__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_historical_week_historical_week__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_receive_data_receive_data__ = __webpack_require__(178);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { CreateUserPage } from '../pages/create-user/create-user';


var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Principal', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Tickets', component: __WEBPACK_IMPORTED_MODULE_6__pages_TicketsTodo_tickets_tickets__["a" /* TicketsPage */] },
            { title: 'Recibir datos', component: __WEBPACK_IMPORTED_MODULE_10__pages_receive_data_receive_data__["a" /* ReceiveDataPage */] },
            { title: 'Cierre actual', component: __WEBPACK_IMPORTED_MODULE_7__pages_consolidated_consolidated__["a" /* ConsolidatedPage */] },
            { title: 'Cierres y Pagos', component: __WEBPACK_IMPORTED_MODULE_8__pages_HistoricalTodo_historical_historical__["a" /* HistoricalPage */] },
            { title: 'Historial semanal', component: __WEBPACK_IMPORTED_MODULE_9__pages_historical_week_historical_week__["a" /* HistoricalWeekPage */] },
            { title: 'Configurar límites', component: __WEBPACK_IMPORTED_MODULE_5__pages_ControlPedazos_control_pedazos_control_pedazos__["a" /* ControlPedazosPage */] }
            // { title: 'Crear usuario', component: CreateUserPage }
        ];
        platform.ready().then(function () {
            platform.registerBackButtonAction(function () {
                //Codigo de lo que quiere hacer cuando le demos back
            }, 100);
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>BPWallet 2.0.8</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 728:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonCalculatorClass; });
var ButtonCalculatorClass = /** @class */ (function () {
    function ButtonCalculatorClass(pID, pName, pEnabled) {
        this.id = pID;
        this.name = pName;
        this.enabled = pEnabled;
    }
    return ButtonCalculatorClass;
}());

//# sourceMappingURL=ButtonCalculatorClass.model.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiariaControl; });
var DiariaControl = /** @class */ (function () {
    function DiariaControl(id, id_client, client, total, win, id_closure) {
        this.id = id;
        this.id_client = id_client;
        this.client = client;
        this.total = total;
        this.date = '';
        this.status = 0;
        this.detalle = [];
        this.win = win;
        this.id_closure = id_closure;
    }
    DiariaControl.prototype.toStringToReceiptView = function () {
        return String("Ticket #" + this.id_closure + "-" + this.id + " -Cliente: " + this.client + "\n");
    };
    DiariaControl.prototype.toStringNormal = function () {
        return "ID: " + this.id + " ID Cliente: " + this.id_client + " Cliente: " + this.client + " Total: " + this.total + " Estado: " + this.status;
    };
    return DiariaControl;
}());

//# sourceMappingURL=DiariaControl.model.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HistoricalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_database_database__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__historical_detail_historical_detail__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__models_WeekClosure_model__ = __webpack_require__(243);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HistoricalPage = /** @class */ (function () {
    function HistoricalPage(navCtrl, navParams, _auxiliarService, toastCtrl, loadingCtrl, database, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._auxiliarService = _auxiliarService;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.database = database;
        this.alertCtrl = alertCtrl;
        this.title = '';
        this.miWeekClosure = new __WEBPACK_IMPORTED_MODULE_7__models_WeekClosure_model__["a" /* WeekClosure */](0, '', '', 0, 0, 0, '', 0, 0);
        this.tickers = __WEBPACK_IMPORTED_MODULE_6__historical_detail_historical_detail__["a" /* HistoricalDetailPage */];
        if (this.navParams.get('pWeekClosure')) {
            this.miWeekClosure = this.navParams.get('pWeekClosure');
            this.title = 'Cierres Semana #' + this.miWeekClosure.id;
            this.getClosuresByIdControl(this.miWeekClosure.id);
        }
        else {
            this.title = 'Cierres y Pagos';
            this.getClosures();
        }
    }
    HistoricalPage.prototype.createWeekClosure = function () {
        var _this = this;
        var myCurrentDate = String(new Date());
        this.miWeekClosure.date = myCurrentDate;
        this.database.createWeekClosure(this.miWeekClosure).then(function (wk) {
            if (wk) {
                _this.getClosures();
                _this.showToast('Creada correctamente');
            }
        });
    };
    HistoricalPage.prototype.ionViewDidLoad = function () {
    };
    HistoricalPage.prototype.ionViewDidEnter = function () {
        if (this._auxiliarService.statusDelete == 1) {
            this.getClosures();
            this._auxiliarService.statusDelete = 0;
        }
    };
    HistoricalPage.prototype.getClosures = function () {
        var _this = this;
        this.closures = [];
        this.database.getClosures().then(function (data) {
            if (data) {
                _this.closures = data;
            }
        });
    };
    HistoricalPage.prototype.getClosuresByIdControl = function (id_control) {
        var _this = this;
        this.closures = [];
        this.database.getClosuresByIdControl(id_control).then(function (data) {
            if (data) {
                _this.closures = data;
            }
        });
    };
    HistoricalPage.prototype.conditionWinnigNumber = function (closure) {
        if (closure.winningNumber == -1 && closure.status == 1) {
            this.presentConfirm(closure);
        }
        else {
            this.goToTickets(closure);
        }
    };
    HistoricalPage.prototype.goToTickets = function (closure) {
        var params = {
            pClosure: closure
        };
        this.navCtrl.push(this.tickers, params);
    };
    HistoricalPage.prototype.validateWinningNumber = function () {
        var cont = 0;
        this.closures.forEach(function (element) {
            if (element.winningNumber == -1) {
                cont = 1;
                return;
            }
        });
        return cont;
    };
    HistoricalPage.prototype.presentConfirmWeekClosure = function () {
        var _this = this;
        if (this.validateWinningNumber() == 0) {
            var alert_1 = this.alertCtrl.create({
                title: 'Cierre Semanal',
                message: 'Desea hacer cierre semanal?',
                buttons: [
                    {
                        text: 'SI',
                        handler: function () {
                            _this.createWeekClosure();
                        }
                    },
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: function () {
                            //--Cancelar
                        }
                    }
                ]
            });
            alert_1.present();
        }
        else {
            this.showToast('ERROR; Tiene cierres pendientes!');
        }
    };
    HistoricalPage.prototype.presentConfirm = function (closure) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Número Ganador',
            message: 'Desea ingresar el numero ganador?',
            buttons: [
                {
                    text: 'SI',
                    handler: function () {
                        _this.presentPrompt(closure);
                    }
                },
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    handler: function () {
                        _this.goToTickets(closure);
                    }
                }
            ]
        });
        alert.present();
    };
    HistoricalPage.prototype.presentPrompt = function (closure) {
        var _this = this;
        var alert = this.alertCtrl.create({
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
                    handler: function (data) {
                        _this.goToTickets(closure);
                    }
                },
                {
                    text: 'Aceptar',
                    handler: function (data) {
                        if (data.multipler != '' && data.number != '' && data.multipler != null && data.number != null) {
                            closure.winningNumber = data.number;
                            _this.database.setWinningNumber(closure, data.multipler).then(function (dataWN) {
                                if (dataWN) {
                                    closure.totalWinning = dataWN;
                                    _this.showToast("Número ganador ingresado.");
                                }
                                _this.getClosures();
                            });
                        }
                        else {
                            _this.showToast("ERROR: llene los datos correctamente!");
                        }
                    }
                }
            ]
        });
        alert.present();
    };
    HistoricalPage.prototype.showToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 1800
        });
        toast.present();
    };
    HistoricalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-historical',template:/*ion-inline-start:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/HistoricalTodo/historical/historical.html"*/'<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title *ngIf="title != \'\'">{{title}}</ion-title>\n    <ion-buttons end *ngIf="closures.length > 0 && miWeekClosure.id == 0">\n      <button ion-button icon-only (click)="presentConfirmWeekClosure()">\n        <ion-icon name="cut"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card *ngFor="let closure of closures" (click)="conditionWinnigNumber(closure)">\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 19px; margin: 0%; padding: 0%; border: 0%">\n            Cierre #{{closure.id}} {{closure.description}}\n          </ion-card-header>\n        </ion-col>\n        <ion-col>\n          <ion-card-header style="color: black; font-size: 13px; margin: 0%; padding: 0%; border: 0%; text-align: right;">\n            {{closure.date | date: \'dd/MM/yyyy hh:mm\'}}\n          </ion-card-header>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n            Total vendido: {{closure.total | currency:\'Lps.\':true:\'1.2-2\'}}\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card-content style="color: #488aff; font-size: 18px; margin: 0%; padding: 0%; border: 0%">\n            Total comisión: {{closure.totalPorcentWinnigSeller | currency:\'Lps.\':true:\'1.2-2\'}}\n          </ion-card-content>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col>\n          <ion-card-content style="color: tomato; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%">\n            Total ganado: {{closure.totalWinning | currency:\'Lps.\':true:\'1.2-2\'}}\n            <ion-card-content *ngIf="closure.winningNumber != -1" style="color: tomato; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%; text-align: right;">\n              NG: {{closure.winningNumber | number:\'2.0-0\'}}\n            </ion-card-content>\n          </ion-card-content>\n        </ion-col>\n        <!-- <ion-col *ngIf="closure.winningNumber != 0">\n          <ion-card-content style="color: tomato; font-size: 18px; margin: 0%; padding: 0%; border: 0%; width: 100%; text-align: right;">\n            NG: {{closure.winningNumber | number:\'2.0-0\'}}\n          </ion-card-content>\n        </ion-col> -->\n      </ion-row>\n    </ion-grid>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/dennismenjivar/Desktop/BPWallet/src/pages/HistoricalTodo/historical/historical.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__lib_auxiliar_service__["a" /* AuxiliarService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_3__providers_database_database__["a" /* DatabaseProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], HistoricalPage);
    return HistoricalPage;
}());

//# sourceMappingURL=historical.js.map

/***/ })

},[387]);
//# sourceMappingURL=main.js.map