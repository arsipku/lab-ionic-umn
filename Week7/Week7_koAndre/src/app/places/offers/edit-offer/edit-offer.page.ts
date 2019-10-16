import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Place } from '../../place.model';
import { OffersService } from '../offers.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {
  place: Place;
  constructor(
    private navCtrl: NavController,
    private route: ActivatedRoute,
    private offersSvc: OffersService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('offerId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.offersSvc.getPlace(paramMap.get('offerId'));
    });
  }

  goBack() {
    this.navCtrl.navigateBack('/places/tabs/offers/' + this.place.id);
  }
}
