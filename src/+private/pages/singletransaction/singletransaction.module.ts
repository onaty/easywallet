import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SingletransactionPage } from './singletransaction';

@NgModule({
  declarations: [
    SingletransactionPage,
  ],
  imports: [
    IonicPageModule.forChild(SingletransactionPage),
  ],
})
export class SingletransactionPageModule {}
