import { HomeService } from './home.service';
import { Gebetan } from './home.model';
import { Component } from '@angular/core';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loaded_gebetan: Gebetan[];
  constructor(private homeService: HomeService,
    private loadingController: LoadingController,
    private alertController: AlertController) {}

  ngOnInit(){
    this.loaded_gebetan = this.homeService.getAllGebetan;
  }

  async presentLoading(gebetan) {
    const loading = await this.loadingController.create({
      message: 'Wait',
      duration: 1500
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    this.addGebetan(gebetan);
    this.presentAlert(gebetan);

    console.log('Loading dismissed!');
  }

  async presentAlert(gebetan) {
    const alert = await this.alertController.create({
      header: 'SELAMAT',
      message: 'Yay <b>' + gebetan.nama + '</b> telah ditambah jadi gebetan',
      buttons: ['OK']
    });

    await alert.present();
  }

  addGebetan(gebetan){
    this.homeService.tambahGebetan(gebetan);
  }

}
