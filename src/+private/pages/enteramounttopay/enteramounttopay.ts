import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SuccessfullysentPage } from '../successfullysent/successfullysent';
import { AmountconfirmationPage } from '../amountconfirmation/amountconfirmation';


@Component({
  selector: 'page-enteramounttopay',
  templateUrl: 'enteramounttopay.html',
})
export class EnteramounttopayPage {
  showbackbutton=false
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EnteramounttopayPage');
  }

  succesfulpay(){
    this.navCtrl.push(AmountconfirmationPage)
    this.showbackbutton=true;
  }

}
