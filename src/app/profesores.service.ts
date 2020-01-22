import { point as Point, bearing, distance } from 'turf';
import { Injectable } from '@angular/core';
import { Perofesor } from './perofesor';
@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {
  listaProfesores: Perofesor[] = new Array();
  //[[38.6762376, -6.4183559], [38.6730116, -6.4183819], [38.6740926, -6.4183829], [38.6750836, -6.4183839]]
  constructor() {
    this.addProfesor("juan", "alberto", [38.6762376, -6.4183559]);
    this.addProfesor("Franchesco", "Masia", [38.4321546, -6.2015664]);
    this.addProfesor("Paco", "Albarez", [38.1687961, -6.6489315]);
    this.addProfesor("Persona", "Umberto", [37.4556276, -6.9873154]);
    this.addProfesor("San Frax", "Naseu", [35.3135468, -5.1235559]);
  }
  addProfesor(nombre: String, apellidos: String, posicion: number[]) {
    this.listaProfesores.push(new Perofesor(nombre, apellidos, posicion));
  }
  
  public getProfPerimetro() {
    console.log(this.listaProfesores);
    let punto = Point([38.668356, -6.412431]);
    let resultado = this.listaProfesores.filter(profesor => {
      return this.getDistancia(punto, profesor.posicion) <= 100;
    });
    console.log(resultado);
    return resultado;
  }
  getDistancia(pointOrigen, pointFin) {
    console.log(distance(pointOrigen, pointFin));
    return distance(pointOrigen, pointFin);
  }
}
