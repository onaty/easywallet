import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SuccessfullysentPage } from '../successfullysent/successfullysent';
import { AmountconfirmationPage } from '../amountconfirmation/amountconfirmation';

/**
 * Generated class for the EnteramounttopayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
