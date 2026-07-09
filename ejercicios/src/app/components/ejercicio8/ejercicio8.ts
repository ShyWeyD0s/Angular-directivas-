import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Producto {
  nombre: string;
  precio: number;
  descripcion: string;
}

@Component({
  selector: 'app-ejercicio8',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio8.html',
  styleUrls: ['./ejercicio8.css']
})
export class Ejercicio8 {
  // Recibimos el objeto completo como propiedad de entrada
  @Input({ required: true }) datos!: Producto;
}