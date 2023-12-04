import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AppCliente';

  nombre: any = 'Italo';
  apellido: any = 'Perez';

  mostrarNombre = true;

  alumnos: any = ['Italo', 'Jose', 'Pepe', 'Lucho'];
  nombreCurso = 'Numeros';
}
