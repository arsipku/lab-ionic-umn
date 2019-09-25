import { IonItemSliding } from '@ionic/angular';
import { Booking } from './booking.model';
import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  myBookings: import("/home/yehezkiel/Documents/Mobile2_Tugas/LAB/Week7_tutorial/umn_homes-cont/src/app/places/place.model").Place[];
  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
    this.myBookings = this.bookingService.getMyBookings();
    console.log(this.myBookings);
  }


  ionViewWillEnter(){
   this.myBookings = this.bookingService.getMyBookings();
   console.log(this.myBookings);
  }

  onCancelBooking(offerId: string, slidingEl: IonItemSliding){
    slidingEl.close();
    //cancel booking with id offerId
  }

  onCancelMyBooking(id: string){
    this.bookingService.removeFromMyBookings(id);
    this.myBookings = this.bookingService.getMyBookings();
  }
}
