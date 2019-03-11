import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { SingletransactionPage } from '../singletransaction/singletransaction';


@Component({
  selector: 'page-transactions',
  templateUrl: 'transactions.html',
})
export class TransactionsPage {
  periodtype="all";searchperiod="today"
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TransactionsPage');
  }
  period(event){
    console.log(this.periodtype)
  }
  searchperiods($event){

    console.log(this.searchperiod)
  }
  singletransaction(){

  this.navCtrl.push(SingletransactionPage)
  }
}
