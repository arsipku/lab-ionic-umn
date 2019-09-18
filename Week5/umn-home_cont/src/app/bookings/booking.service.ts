import { Booking } from './booking.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private _bookings: Booking[] = [
    {
      id: 'xyz',
      placeId: 'p1',
      placeTitle: 'Place Bla bla bla',
      guestNumber: 2,
      userId: 'abc'
    }
  ];
  constructor() { }

  get bookings(){
    return[...this._bookings];
  }
}
