import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-changetransactionpin',
  templateUrl: 'changetransactionpin.html',
})
export class ChangetransactionpinPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangetransactionpinPage');
  }

}
