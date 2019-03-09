import { Component } from '@angular/core';
import {  NavController, NavParams, Platform } from 'ionic-angular';
import { EnteramounttopayPage } from '../enteramounttopay/enteramounttopay';

@Component({
  selector: 'page-searchusertopay',
  templateUrl: 'searchusertopay.html',
})
export class SearchusertopayPage {
  showbackbutton=false;
  phonenumber;
  constructor(public navCtrl: NavController, 
    public platform: Platform,public navParams: NavParams) {
     
     
  }
  ionViewDidEnter(){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchusertopayPage');
  }
  enteramount(){
    this.navCtrl.push(EnteramounttopayPage)
    this.showbackbutton=true;
  }
  closenav(){
    this.navCtrl.popAll()
  }

}
