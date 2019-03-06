import { Component,ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  loadchart(){
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {

      type: 'doughnut',
      data: {
          labels: ["Received($)", "Spent($)"],
          datasets: [{
              label: '# of Votes',
              data: [2500, 55559],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  
              ],
              hoverBackgroundColor: [
                  "#FF6384",
                  "#36A2EB",
                 
              ]
          }]
      }

  });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    this.loadchart();
  }

}
