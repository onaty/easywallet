
import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import { HomePage } from './pages/home/home';
import { PrivatetabPage } from './pages/privatetab/privatetab';
import { SettingsPage } from './pages/settings/settings';
import { TransactionsPage } from './pages/transactions/transactions';
import { SearchusertopayPage } from './pages/searchusertopay/searchusertopay';
import { RequestorpayPage } from './modals/requestorpay/requestorpay';
import { EnteramounttopayPage } from './pages/enteramounttopay/enteramounttopay';
import { AmountconfirmationPage } from './pages/amountconfirmation/amountconfirmation';
import { SuccessfullysentPage } from './pages/successfullysent/successfullysent';

// import { HeaderComponent } from "./components/header/header";

// Pages Start
// Pages End


// Services Start


//  Services End


@NgModule({
  declarations: [
    HomePage,
    PrivatetabPage,
    SettingsPage,
    TransactionsPage,
    SearchusertopayPage,
    RequestorpayPage,
    EnteramounttopayPage,
    AmountconfirmationPage,
    SuccessfullysentPage
  ],
  imports: [
    IonicModule,
  ],
   bootstrap:[IonicApp],
  entryComponents: [
    HomePage,
    PrivatetabPage,
    SettingsPage,
    TransactionsPage,
    SearchusertopayPage,
    RequestorpayPage,
    EnteramounttopayPage,
    AmountconfirmationPage,
    SuccessfullysentPage
  ],
  providers: [

  ]
})

export class PrivateModule {}
