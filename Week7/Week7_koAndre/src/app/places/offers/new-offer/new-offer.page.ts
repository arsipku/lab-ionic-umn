import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController, AlertController } from '@ionic/angular';
import { Place } from '../../place.model'
import { PlaceDetailPage } from '../../discover/place-detail/place-detail.page';
import {OffersService} from '../offers.service'
@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  constructor(private navCtrl: NavController, private alertCtrl : AlertController, private service : OffersService) { }

  onSubmit(f: NgForm) {
    console.log(f.valid);
    // if (f.value.email === 'andre@andre.com' && f.value.password === 'andreandre') {
    //   this.presentAlertWelcome();
    // } else {
    //   this.presentAlertFailed();
    // }
    this.service.postplace(f);

  }

  async presentAlertWelcome() {
    const alert = await this.alertCtrl.create({
      header: 'Welcome!',
      buttons: [
        {
          text: 'OK',
        },
      ]
    });
    await alert.present();
  }
  async presentAlertFailed() {
    const alert = await this.alertCtrl.create({
      header: 'Login Failed!',
      buttons: [
        {
          text: 'OK',
        },
      ]
    });
    await alert.present();
  }

  async showAlertWithInputs() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'NAME',
      message: 'Enter your name:',
      inputs: [
        {
          name: 'studentName',
          placeholder: 'Enter your name ...',
          type: 'text',
        },
        {
          name: 'studentNumber',
          placeholder: 'Enter your NIM ...',
          type: 'text',
        }
      ],
      buttons: [
        {
          text: 'OK',
          handler: (isinya) => {
            console.log(isinya.studentNumber);
          }
        },
        {
          text: 'Cancel',
          role: 'cancel'
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.navigateBack('/places/tabs/offers');
  }

}
