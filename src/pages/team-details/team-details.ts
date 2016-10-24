import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello TeamDetails Page');
  }

}
