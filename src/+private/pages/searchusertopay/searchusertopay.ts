import { Component } from '@angular/core';
import {  NavController, NavParams, Platform } from 'ionic-angular';

@Component({
  selector: 'page-searchusertopay',
  templateUrl: 'searchusertopay.html',
})
export class SearchusertopayPage {

  constructor(public navCtrl: NavController, 
    public platform: Platform,public navParams: NavParams) {
     
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchusertopayPage');
  }

}
