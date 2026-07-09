import { Component, signal } from '@angular/core';
import { TareaComponent } from './components/tarea/tarea';
import { Ejercicio2 } from './components/ejercicio2/ejercicio2';
import { Ejercicio3 } from './components/ejercicio3/ejercicio3';
import { Ejercicio4 } from './components/ejercicio4/ejercicio4';
import { Ejercicio5 } from './components/ejercicio5/ejercicio5';
import { Ejercicio6 } from './components/ejercicio6/ejercicio6';
import { Ejercicio7 } from './components/ejercicio7/ejercicio7';
import { Ejercicio8 } from './components/ejercicio8/ejercicio8';

@Component({
  selector: 'app-root',
  imports: [TareaComponent, Ejercicio2, Ejercicio3, Ejercicio4, Ejercicio5, Ejercicio6, Ejercicio7, Ejercicio8],
  templateUrl: './app.html',
  styleUrl: './app.css'

})
export class App {
  protected readonly title = signal('ejercicios');
  producto = {
    nombre: 'Auriculares Inalámbricos',
    precio: 89.99,
    descripcion: 'Auriculares con cancelación de ruido y 20h de batería.'
  };

}
