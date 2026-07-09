import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type EstadoSemaforo = 'verde' | 'amarillo' | 'rojo';

@Component({
  selector: 'app-ejercicio9',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio9.html',
  styleUrls: ['./ejercicio9.css']
})
export class Ejercicio9 {
  // Propiedad de entrada que indica el estado del semáforo
  @Input({ required: true }) estado: EstadoSemaforo = 'rojo';

  // Método para obtener el color basado en el estado
  getColor(): string {
    switch (this.estado) {
      case 'verde': return '#28a745';
      case 'amarillo': return '#ffc107';
      case 'rojo': return '#dc3545';
      default: return '#ccc';
    }
  }
}
