import { Injectable } from "@angular/core";
import { Place } from "./place.model";

@Injectable({
  providedIn: "root"
})
export class PlacesService {
  private places: Place[] = [
    {
      id: 'p1',
      title: 'Serpong M-Town',
      description: '2BR apartment near Summarecon Mal Serpong.',
      imgUrl: 'http://www.summareconbekasi.com/public/images/gallery/article/7082/IMG_3293-25.jpg',
      price: 700000000
    },
    {
      id: 'p2',
      title: 'Scientia Residence',
      description: 'Near UMN with many choices of foods around.',
      imgUrl: 'https://d1nabgopwop1kh.cloudfront.net/hotel-asset/30000002100123853_wh_3',
      price: 1000000000
    },
    {
      id: 'p3',
      title: 'Ruko Bolsena',
      description: 'We have Bakmi Ationg nearby!',
      imgUrl: 'https://rumahdijual.com/attachments/tangerang/5568730d1463215969-dijual-ruko-bolsena-hrg-3-1-m-strategis-di-20160513_165442.jpg',
      price: 3000000000
    }
  ];

  get allPlaces() {
    return [...this.places];
  }

  getPlace(id: string) {
    return {...this.places.find(p => p.id === id)};
  }
  constructor() { }
}
