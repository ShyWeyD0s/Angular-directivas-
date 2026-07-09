import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio5',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio5.html',
  styleUrls: ['./ejercicio5.css']
})
export class Ejercicio5 {
  esEstiloModerno: boolean = false;

  alternarEstilo() {
    this.esEstiloModerno = !this.esEstiloModerno;
  }
}