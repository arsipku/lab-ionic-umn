import { Component, OnInit, Input } from '@angular/core';
import { ModalController, LoadingController } from '@ionic/angular';
import { NavController} from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { Place } from 'src/app/places/place.model';
import { BookingService } from '../booking.service';
import { AlertController } from '@ionic/angular';
import { PlacesService } from '../../places/places.service';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  place: Place;
  @Input() selectedPlace: Place;
  // isLoading = false;//<-- can be used if we want to use Spinner with ngIf on the HTML file
  constructor(private navCtrl: NavController,private route: ActivatedRoute,private router: Router,private placesSvc: PlacesService,private modalCtrl: ModalController, private loadingCtrl: LoadingController, private bookingService : BookingService,private alertCtrl: AlertController) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap) => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/offers');
        return;
      }
      this.place = this.placesSvc.getPlace(paramMap.get('placeId'));
    });
  }

  async bookThisPlace() {
    // this.isLoading = true; 
      const alert = await this.alertCtrl.create({
        header: 'How Many People Are Coming ?',
        inputs: [
          {
            name: 'group',
            placeholder: 'number og people ...',
            type: 'number',
          }
        ],
        buttons: [
          {
            text: 'Book',
            handler: (isinya) => {
              this.bookingService.postbooking(isinya,this.place);
            }
          },
          {
            text: 'Cancel',
            role: 'cancel'
          }
        ]
      });
  
      await alert.present();

      this.loadingCtrl.create({
        keyboardClose: true,
        message: 'Booking the place ...'
      })
        .then(loadingEl => {
          loadingEl.present();
          setTimeout(() => {
            // this.isLoading = false; 
            loadingEl.dismiss();
            this.modalCtrl.dismiss({ message: 'booked!' }, 'confirm');
          }, 2000); //setTimeout is used to simulate fetching data from a server which takes 2 seconds
        });
    
    
    
  }

  dismissModal() {
    this.modalCtrl.dismiss(null, 'cancel');
  }
}
