import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ejercicio6',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './ejercicio6.html',
  styleUrls: ['./ejercicio6.css']
})
export class Ejercicio6 {
  //Color inicial 
  @Input() colorFondo: string = '#ffffff';
}