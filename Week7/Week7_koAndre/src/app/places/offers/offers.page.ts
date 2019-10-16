import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { NavController, IonItemSliding } from '@ionic/angular';
import { Router } from '@angular/router';
import { OffersService } from './offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {
  loadedPlaces: Place[] = [];

  constructor(private offersSvc: OffersService, private navCtrl: NavController, private router: Router) { }

  ngOnInit() {
    this.loadedPlaces = this.offersSvc.getAllOffers();
  }
  editOffer(id: string, slidingItem: IonItemSliding) {
    slidingItem.close();
    this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', id]);
  }

}
