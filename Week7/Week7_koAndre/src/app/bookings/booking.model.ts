import { Place } from '../places/place.model';

export interface Booking {
    id: string;
    place: Place;
    guestNumber: number;
}
