import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio7',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio7.html',
  styleUrls: ['./ejercicio7.css']
})
export class Ejercicio7 {
  esModoOscuro: boolean = false;

  alternarTema() {
    this.esModoOscuro = !this.esModoOscuro;
  }
}
