import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio4',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio4.html',
  styleUrls: ['./ejercicio4.css']
})
export class Ejercicio4 {
  estaResaltado: boolean = false;
  elementos: string[] = ['Elemento 1', 'Elemento 2', 'Elemento 3', 'Elemento 4'];

  toggleEstilo() {
    this.estaResaltado = !this.estaResaltado;
  }
}