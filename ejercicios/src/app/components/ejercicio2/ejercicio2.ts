import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio2',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio2.html',
  styleUrls: ['./ejercicio2.css']
})
export class Ejercicio2 {
  texto: string = '';
  limite: number = 10;

  get haExcedido(): boolean {
    return this.texto.length > this.limite;
  }
}