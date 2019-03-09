import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuccessfullysentPage } from '../successfullysent/successfullysent';


@Component({
  selector: 'page-amountconfirmation',
  templateUrl: 'amountconfirmation.html',
})
export class AmountconfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AmountconfirmationPage');
  }
  completetransaction(){
    this.navCtrl.push(SuccessfullysentPage);
  }
}
