import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../places.service';
import { Place } from '../place.model';
import { MenuController } from '@ionic/angular';
import { SegmentChangeEventDetail } from '@ionic/core';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
  loadedPlaces: Place[] = [];

  constructor(private placesSvc: PlacesService, private menuCtrl: MenuController) { }

  ngOnInit() {
    this.loadedPlaces = this.placesSvc.allPlaces;
  }

  onOpenMenu() {
    this.menuCtrl.toggle('m1');
  }

  onFilterUpdate(evt: CustomEvent<SegmentChangeEventDetail>) {
    console.log(evt.detail);
  }
}
