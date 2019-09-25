import { Injectable } from '@angular/core';
import {UKM} from './home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  selected_ukm: UKM[] = [];
  private _ukm: UKM[] =[
    new UKM(
      'u1',
      'Taekwondo',
      'Bela Diri'
    ),
    new UKM(
      'u2',
      'Basket',
      'Bikin lelah'
    ),
    new UKM(
      'u3',
      'Futsal',
      'Kaki Pegal'
    ),
    new UKM(
      'u4',
      'Pingpong',
      'Main di atas meja'
    ),
    new UKM(
      'u5',
      'Badminton',
      'Kok dari ayam'
    )
  ];
  constructor() { }



  get getAllUKM(){
    return [...this._ukm];
  }

  gabung(){
    console.log("Ayo gabung!");
  }
  tambahUKM(uid){
    this.selected_ukm.push(uid);
    console.log(this.selected_ukm);
  }

  get_ukms(){
    return [...this.selected_ukm];
  }

  removeUKM(id){
    this.selected_ukm = this.selected_ukm.filter(uid =>{
      return uid.id !== id;
    })
  }

}
