import { Injectable } from "@angular/core";
import { Booking } from './booking.model';
import { NgForm } from '@angular/forms';
import { Place } from 'src/app/places/place.model';
import { NavController } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class BookingService {
    private bookings: Booking[] = [];

    get allBookings() {
        return [...this.bookings];
    }
    constructor(private navCtrl: NavController){}

    deleteBooking(id: string) {
        const idx = this.bookings.findIndex(b => b.id === id);
        this.bookings.splice(idx, 1);
    }
    postbooking(isinya , place:Place)
    {
        let newbooking =  {} as Booking;
        newbooking.id = isinya.group;
        newbooking.guestNumber = isinya.group;
        newbooking.place = place;
        this.bookings.push(newbooking);

    }
}
