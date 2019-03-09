import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { PrivatetabPage } from '../privatetab/privatetab';


@Component({
  selector: 'page-successfullysent',
  templateUrl: 'successfullysent.html',
})
export class SuccessfullysentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccessfullysentPage');
  }

  homepage(){
    this.navCtrl.setRoot(PrivatetabPage);
  }

}
