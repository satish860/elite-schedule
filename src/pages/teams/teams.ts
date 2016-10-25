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

   teams=[
     {id:1,name:"team1"},
     {id:2,name:"team2"}
     ];

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello Teams Page');
  }

  itemTapped($event,team){
    this.navCtrl.push(TeamDetails,team);
  }

}
