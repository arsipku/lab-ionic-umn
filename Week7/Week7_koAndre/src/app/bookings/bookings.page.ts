import { Component, OnInit } from '@angular/core';
import { BookingService } from './booking.service';
import { Booking } from './booking.model';
import { IonItemSliding } from '@ionic/angular';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Booking[];
  constructor(private bookingSvc: BookingService) { }

  ngOnInit() {
    this.bookings = this.bookingSvc.allBookings;
  }

  onCancelBooking(id: string, slidingEl: IonItemSliding) {
    slidingEl.close();
    this.bookingSvc.deleteBooking(id);
    this.bookings = this.bookingSvc.allBookings;
  }
}
