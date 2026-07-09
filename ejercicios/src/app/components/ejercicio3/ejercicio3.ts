import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  standalone: true,
  templateUrl: './ejercicio3.html',
  styleUrls: ['./ejercicio3.css']
})
export class Ejercicio3 {
  // Tamaño inicial en píxeles
  fontSize: number = 20;
  // Bandera para alternar el tamaño del texto
  esGrande: boolean = false;

  alternarTamano() {
    this.esGrande = !this.esGrande;
    this.fontSize = this.esGrande ? 40 : 20;
  }
}
