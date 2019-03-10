import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ActionSheetController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-referral',
  templateUrl: 'referral.html',
})
export class ReferralPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private socialSharing: SocialSharing,
    public plt: Platform,
    private iab: InAppBrowser,
    public actionSheetCtrl: ActionSheetController
    ) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ReferralPage');
  }

  openapps() {
    var message = `
  
    we love easy wallet
    
    `

    var urltoshare = '  www.google.com '
    var subject = 'Start using easy wallet'
    this.socialSharing.share(message, subject, urltoshare)
  }

  sharecode(){
    if (this.plt.is("cordova")) {
      this.openapps()
    }
    else{

    }
  }

  webshare(){
    const browser = this.iab.create('https://api.whatsapp.com/send?phone=+234076233232&text=&source=&data="');
  }

  opentoast(){
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Modify your album',
      buttons: [
        {
          text: 'Destructive',
          role: 'destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  
  }

}
