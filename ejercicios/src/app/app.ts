import { Component, signal } from '@angular/core';
import { TareaComponent } from './components/tarea/tarea';
import { Ejercicio2 } from './components/ejercicio2/ejercicio2';
import { Ejercicio3 } from './components/ejercicio3/ejercicio3';
import { Ejercicio4 } from './components/ejercicio4/ejercicio4';

@Component({
  selector: 'app-root',
  imports: [TareaComponent, Ejercicio2, Ejercicio3, Ejercicio4],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('ejercicios');
}
