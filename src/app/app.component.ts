import { Component } from '@angular/core';
import { registerLocaleData } from '@angular/common/src/i18n/locale_data';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Carlos";

  nombre2 = "carLos arIel eStevez rAMirez";

  arreglo = [1,2,3,4,5,6,7,8,9,10];

  PI = Math.PI;

  a = 0.234;

  salario = 1234.5;

  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edada: 500,
    direccion: {
      calle: 'Primera',
      casa: '19'
    }
  }

  valorDePromesa = new Promise((resolve, reject) => {
    setTimeout(()=> resolve('Llego la data!'),3500);
  });

  fecha = new Date();

  video = 'u3VFzuUiTGw';

  activar = true;
}
