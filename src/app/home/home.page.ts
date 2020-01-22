import { Component } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { Map, tileLayer, marker, icon} from 'leaflet';
import { ProfesoresService } from '../profesores.service';
import 'esri-leaflet';
import {geosearch} from 'esri-leaflet-geocoder';//"esri-leaflet-geocoder"
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  userIcon = icon({
    iconUrl: '../../assets/icon/marcadorUsuario.png',
    iconSize: [52, 52], // size of the icon
    iconAnchor: [26, 52], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76]
  });
  profesorIcon = icon({
    iconUrl: '../../assets/icon/marcadorProfesor.png',
    iconSize: [52, 52], // size of the icon
    iconAnchor: [26, 52], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76]
  });
  map: Map;
  marker: any;
  latLong = [];
  basura = [];
  icons: icon[] = new Array();
  marcadores = [[38.6762376, -6.4183559], [38.6730116, -6.4183819], [38.6740926, -6.4183829], [38.6750836, -6.4183839]];
  constructor(
    private geolocation: Geolocation, private profesores: ProfesoresService
  ) {

  }
  ionViewDidEnter() {
    this.map = new Map("myMap");
    let searchControl = geosearch().addTo(this.map);
    this.showMap();
  }
  showMap() {

    this.basura.push(this.map);
    this.map.setView([38.6760376, -6.4183859], 15);
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
    this.map.on('click', function (e) {
      alert(e.latlng);
      marker(e.latlng, { icon: this.userIcon }, 15).addTo(this.map)
        .bindPopup('Hey, I\'m Here');
    }, this);
  }
  getPositions() {
    this.geolocation.getCurrentPosition({
      enableHighAccuracy: true
    }).then((res) => {
      return this.latLong = [
        res.coords.latitude, res.coords.longitude
      ];
    }).then((latLng) => {

      this.showMarker(latLng);
    });
  }

  showMarker(latLong) {
    console.log(marker([0, 0]).getIcon());
    marker(latLong, { icon: this.userIcon }, 15).addTo(this.map);
    for (let index = 0; index < this.profesores.getProfPerimetro().length; index++) {
      marker(this.profesores.getProfPerimetro()[index].posicion, { icon: this.profesorIcon }, 15).addTo(this.map)
        .bindPopup("nombre: " + this.profesores.getProfPerimetro()[index].nombre +
          " apellidos: " + this.profesores.getProfPerimetro()[index].apellidos);
    }
    this.map.setView(latLong);
  }
  getMarker(e) {
    console.log(e.latLng);
  }


}
