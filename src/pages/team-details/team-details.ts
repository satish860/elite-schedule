import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the TeamDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-details',
  templateUrl: 'team-details.html'
})
export class TeamDetails {
   team:any;
  constructor(public navCtrl: NavController,public params:NavParams) {
    this.team=params.data;
  }

  ionViewDidLoad() {
    console.log('Hello TeamDetails Page');
  }

}
