import { Component, OnInit } from '@angular/core';
import { point as Point, bearing as Bearing, distance as Distance } from 'turf';
import * as MapBoxGl from 'mapbox-gl';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-guarradas',
  templateUrl: './guarradas.page.html',
  styleUrls: ['./guarradas.page.scss'],
})
export class GuarradasPage implements OnInit {
  mensaje: string;
  mapa:MapBoxGl.Map;
  constructor() {
    var point1 = Point([38.668415, -6.412424]);
    var point2 = Point([38.677210, -6.409918]);
    var bearings = Bearing(point1, point2);
    var from = point1;
    var to = point2;

    var distances = Distance(from, to);
    this.mensaje = "angulo: " + bearings + " distancia km: " + distances + " boolean: " + (distances <=1);
  }

  ngOnInit() {
    console.log("wathcho estoy");
    MapBoxGl.accessToken = environment.mapBoxKey;
   this.mapa = new MapBoxGl.Map({
    container: 'mapa-mapBox', // container id
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-74.5, 40], // starting position
    zoom: 20 // starting zoom
    });
    
     
    // Add zoom and rotation controls to the map.
    this.mapa.addControl(new MapBoxGl.NavigationControl());
  }

}
