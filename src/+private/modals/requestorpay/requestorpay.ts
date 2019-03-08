import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, Platform } from 'ionic-angular';
import { SearchusertopayPage } from '../../pages/searchusertopay/searchusertopay';


@Component({
  selector: 'page-requestorpay',
  templateUrl: 'requestorpay.html',
})
export class RequestorpayPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewctrl: ViewController
  ) {
  }


  ionViewDidLoad() {
    
    console.log('ionViewDidLoad RequestorpayPage');
  }
  close() {
    this.viewctrl.dismiss()
  }

  gotopage(pagename) {
    if (pagename === 'request') {
    
        this.navCtrl.push(SearchusertopayPage);
        this.viewctrl.dismiss();
    }
    else if (pagename === 'pay') {
      this.navCtrl.push(SearchusertopayPage);
      this.viewctrl.dismiss();
    } else {
      this.navCtrl.push(SearchusertopayPage);
      this.viewctrl.dismiss();
    }
  }

}
