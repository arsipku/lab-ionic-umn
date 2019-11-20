import { MapModalComponent } from './map-modal/map-modal.component';
import { LocationPickerComponent } from './pickers/location-picker/location-picker.component';
import { HomePage } from './../home/home.page';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AgmCoreModule} from '@agm/core';
import {environment} from 'src/environments/environment';


@NgModule({
  declarations: [LocationPickerComponent, MapModalComponent],
  imports: [
    CommonModule, 
    IonicModule,
    AgmCoreModule.forRoot({
      apiKey: `${environment.mapsAPIKey}`
    })
  ],
  exports: [LocationPickerComponent, MapModalComponent],
  entryComponents: [MapModalComponent]
})
export class SharedModule { }
