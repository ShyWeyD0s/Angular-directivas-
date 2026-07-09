import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Tarea {
  id: number;
  titulo: string;
  completada: boolean;
}

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tarea.html',
  styleUrls: ['./tarea.css']
})
export class TareaComponent {
  tareas: Tarea[] = [
    { id: 1, titulo: 'Aprender Angular', completada: false },
    { id: 2, titulo: 'Estudiar TypeScript', completada: false },
    { id: 3, titulo: 'Construir una app', completada: false }
  ];
}
