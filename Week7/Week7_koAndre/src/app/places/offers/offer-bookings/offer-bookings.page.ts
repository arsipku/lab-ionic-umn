import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { PlacesService } from '../../places.service';
import { Place } from '../../place.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {
  place: Place;
  constructor(private navCtrl: NavController, private route: ActivatedRoute, private offersSvc: OffersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('offerId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.offersSvc.getPlace(paramMap.get('offerId'));
      console.log('offer id: ' + this.place.id);
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/places/tabs/offers');
  }

}
