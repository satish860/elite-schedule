import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Teams} from "../page"

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class Tournaments {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Tournaments Page');
  }

  itemTapped(){
    this.navCtrl.push(Teams);
  }

}
