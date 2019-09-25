import { Component, OnInit } from '@angular/core';
import { UKM } from '../home/home.model';
import { HomeService } from '../home/home.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  myFetchedUKM: UKM[] = [];

  constructor(private homeService : HomeService) { }

  ngOnInit() {
    this.myFetchedUKM = this.homeService.get_ukms();
    console.log(this.myFetchedUKM);
    console.log("Coba");
  }

  ionViewWillEnter(){
    this.myFetchedUKM = this.homeService.get_ukms();
  }

  onRemove(u_terpilih){
    this.homeService.removeUKM(u_terpilih);
    this.myFetchedUKM = this.homeService.get_ukms();
  }



}
