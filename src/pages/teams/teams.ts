import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {TeamDetails} from "../page";

/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class Teams {

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Teams Page');
  }

  itemTapped(){
    this.navCtrl.push(TeamDetails);
  }

}
