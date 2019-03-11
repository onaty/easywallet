import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { PrivatetabPage } from '../../../+private/pages/privatetab/privatetab';


@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {
  divtoshow = 'signin'
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SigninPage');
  }

  homepage() {
    this.navCtrl.setRoot(PrivatetabPage)
  }
  signup() {
    this.divtoshow = 'signup'

  }

  signin() {

    this.divtoshow = 'signin'
  }
}
