import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TransactionsPage } from '../transactions/transactions';
import { SettingsPage } from '../settings/settings';

@Component({
  selector: 'page-privatetab',
  templateUrl: 'privatetab.html',
})
export class PrivatetabPage {
  tab1Root = HomePage;
  tab2Root = TransactionsPage;
  tab3Root = SettingsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrivatetabPage');
  }

}
