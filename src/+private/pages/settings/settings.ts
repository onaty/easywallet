import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { ChangetransactionpinPage } from '../changetransactionpin/changetransactionpin';
import { ReferralPage } from '../referral/referral';
import { CustomercarePage } from '../customercare/customercare';


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  pushpage(pagename) {
    if (pagename == 'profile') {
      this.navCtrl.push(EditprofilePage)
    } else if (pagename == 'password') {
      this.navCtrl.push(ChangepasswordPage)
    }
    else if (pagename == 'pin') {
      this.navCtrl.push(ChangetransactionpinPage)
    }
    else if (pagename == 'refer') {
      this.navCtrl.push(ReferralPage)
    }
    else if (pagename == 'support') {
      this.navCtrl.push(CustomercarePage)
    }

  }

}
