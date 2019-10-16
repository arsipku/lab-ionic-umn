import { Injectable } from '@angular/core';
import { Place } from '../place.model';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';
@Injectable({
  providedIn: 'root'
})
export class OffersService {
  offers: Place[] = [
    {
      id: 'o1',
      title: 'Apartment Bagus',
      description: 'Bagus banget deh pokonya',
      imgUrl: 'https://media.istockphoto.com/photos/walkway-leading-along-the-new-colorful-cmplex-of-apartment-buildings-picture-id889473004?k=6&m=889473004&s=612x612&w=0&h=6lQi62MTrabi-GbvPLI966CkIjq7TXL5xGquM-snovw=',
      price: 100,
    },
    {
      id: 'o2',
      title: 'Apartment Kurang Bersih',
      description: 'Ada kotoran sedikit-sedikit tapi overall oke lah.',
      imgUrl: 'https://media.istockphoto.com/photos/3d-illustration-living-room-and-kitchen-interior-design-modern-studio-picture-id864713244?k=6&m=864713244&s=612x612&w=0&h=CPFUGkLILKnAC6kJeLuu71_JsE4Aa3dx016B9thVxyc=',
      price: 50,
    }
  ];
  constructor(private navCtrl: NavController) { }

  getAllOffers(){
    return [...this.offers];
  }

  getPlace(id: string) {
    return {...this.offers.find(o => o.id === id)};
  }

  postplace(f: NgForm){
    let newPlace =  {} as Place;
    newPlace.id = f.value.offerid;
    newPlace.description = f.value.description;
    newPlace.title = f.value.placetitle;
    newPlace.imgUrl = f.value.imageurl;
    newPlace.price = f.value.pricepernight;
    this.offers.push(newPlace);
    this.navCtrl.navigateBack('/places/tabs/offers');
  }
}
