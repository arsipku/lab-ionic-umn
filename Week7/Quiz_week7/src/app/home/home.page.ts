import { Component, OnInit } from '@angular/core';
import { UKM } from './home.model';
import { HomeService } from './home.service';
import { ModalController, AlertController } from '@ionic/angular';
import { ThrowStmt } from '@angular/compiler';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  // loaded_ukm: UKM[] = [
  //   {
  //     id: 'u1',
  //     title: 'Taekwondo',
  //     ukm_desc: 'Bela diri'
  //   },
  //   {
  //     id: 'u2',
  //     title: 'Futsal',
  //     ukm_desc: 'Mudah lelah'
  //   },
  //   {
  //     id: 'u3',
  //     title: 'PingPong',
  //     ukm_desc: 'Main di meja'
  //   },
  //   {
  //     id: 'u4',
  //     title: 'Basket',
  //     ukm_desc: 'Lempar bola'
  //   },
  //   {
  //     id: 'u5',
  //     title: 'Badminton',
  //     ukm_desc: 'Pakai raket'
  //   }
  // ];

  loaded_ukm: UKM[];


  constructor(private modalCtrl: ModalController,   
    private alertController: AlertController,
    private homeService: HomeService) { }

  ngOnInit() {
    this.loaded_ukm = this.homeService.getAllUKM;
  }

  async gabung(id) {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>Beneran mau join?</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Serius',
          handler: () => {
            this.addUKM(id);
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

addUKM(id){
  this.homeService.tambahUKM(id);
}


}
