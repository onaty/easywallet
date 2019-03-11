
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
import { EditprofilePage } from './pages/editprofile/editprofile';
import { ChangepasswordPage } from './pages/changepassword/changepassword';
import { ChangetransactionpinPage } from './pages/changetransactionpin/changetransactionpin';
import { CustomercarePage } from './pages/customercare/customercare';
import { ReferralPage } from './pages/referral/referral';
import { SingletransactionPage } from './pages/singletransaction/singletransaction';

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
    SuccessfullysentPage,
    EditprofilePage,
    ChangepasswordPage,
    ChangetransactionpinPage,
    CustomercarePage,
    ReferralPage,
    SingletransactionPage
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
    SuccessfullysentPage,
    EditprofilePage,
    ChangepasswordPage,
    ChangetransactionpinPage,
    CustomercarePage,
    ReferralPage,
    SingletransactionPage
  ],
  providers: [

  ]
})

export class PrivateModule {}
