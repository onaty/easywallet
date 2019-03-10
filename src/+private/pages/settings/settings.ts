import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EditprofilePage } from '../editprofile/editprofile';
import { ChangepasswordPage } from '../changepassword/changepassword';
import { ChangetransactionpinPage } from '../changetransactionpin/changetransactionpin';
import { ReferralPage } from '../referral/referral';
import { CustomercarePage } from '../customercare/customercare';
import { EmailComposer } from '@ionic-native/email-composer';
import { Platform } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private emailComposer: EmailComposer,
    public plt: Platform,
    private iab: InAppBrowser
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  pushpage(pagename) {
    if (pagename == 'profile') {
      this.navCtrl.push(EditprofilePage)
    } else if (pagename == 'password') {
      this.navCtrl.push(ChangepasswordPage)
    }
    else if (pagename == 'pin') {
      this.navCtrl.push(ChangetransactionpinPage)
    }
    else if (pagename == 'refer') {
      this.navCtrl.push(ReferralPage)
    }
    else if (pagename == 'support') {
      this.navCtrl.push(CustomercarePage)
    }

  }

  sendemail() {
    if (this.plt.is("cordova")) {
    this.emailComposer.isAvailable().then((available: boolean) =>{
      if(available) {
        //Now we know we can send
      }
     });
     
     let email = {
       to: 'max@mustermann.de',
       cc: 'erika@mustermann.de',
       bcc: ['john@doe.com', 'jane@doe.com'],
      //  attachments: [
      //    'file://img/logo.png',
      //    'res://icon.png',
      //    'base64:icon.png//iVBORw0KGgoAAAANSUhEUg...',
      //    'file://README.pdf'
      //  ],
       subject: 'Easy Wallet',
       body: 'I am having issues with transaction',
      //  isHtml: true
     };
     
     // Send a text message using default options
     this.emailComposer.open(email);
  }
  else{
    const browser = this.iab.create('https://api.whatsapp.com/send?phone=+234076233232&text=&source=&data="');


  }
}
}
