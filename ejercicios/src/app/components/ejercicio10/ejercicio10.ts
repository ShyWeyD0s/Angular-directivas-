import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Producto1 {
  nombre: string;
  categoria: string;
  precio: number;
  disponible: boolean;
}

@Component({
  selector: 'app-ejercicio10',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio10.html',
  styleUrls: ['./ejercicio10.css']
})
export class Ejercicio10 {
  productos: Producto1[] = [
    { nombre: 'Laptop', categoria: 'Electrónica', precio: 1200, disponible: true },
    { nombre: 'Cafetera', categoria: 'Hogar', precio: 80, disponible: false },
    { nombre: 'Silla Gamer', categoria: 'Oficina', precio: 250, disponible: true },
    { nombre: 'Audífonos', categoria: 'Electrónica', precio: 150, disponible: false }
  ];
}
