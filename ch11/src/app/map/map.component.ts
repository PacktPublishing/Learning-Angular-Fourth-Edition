import { Component } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  position: google.maps.LatLngLiteral =  {
    lat: 38.480052,
    lng: 22.494062
  };
  options: google.maps.MapOptions = {
    center: { lat: 39.0742, lng: 21.8243 },
    zoom: 6
  };
}
