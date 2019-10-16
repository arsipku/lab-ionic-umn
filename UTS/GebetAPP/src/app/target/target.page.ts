import { HomeService } from './../home/home.service';
import { Gebetan } from './../home/home.model';
import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-target',
  templateUrl: './target.page.html',
  styleUrls: ['./target.page.scss'],
})
export class TargetPage implements OnInit {
  myFetchedGebetan: Gebetan[] = [];
  constructor(private homeService: HomeService,
    private actionSheetController: ActionSheetController) { }

  ngOnInit() {
    this.myFetchedGebetan = this.homeService.get_gebetans();
    console.log(this.myFetchedGebetan);
    console.log("Yayayyayaya");
  }

  ionViewWillEnter() {
    this.myFetchedGebetan = this.homeService.get_gebetans();
  }

  async onRemove(gebetan_terpilih) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Yakin gak gebet dia lagi?',
      buttons: [{
        text: 'Yakin, hapus dari daftar',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.homeService.removeGebetan(gebetan_terpilih.id);
          console.log("Gebetan " + gebetan_terpilih.title + " telah dihapus");
          this.myFetchedGebetan = this.homeService.get_gebetans();
          console.log('Delete clicked');
        }
      }, {
        text: 'Gak yakin, kembali',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          console.log("Canceled");
        }
      }]
    });
    await actionSheet.present();
  }

}
