import { Component, OnInit } from '@angular/core';
import { Pais } from '../../pais';
import { PaisesService } from '../../paises.service';

@Component({
  selector: 'app-regiones',
  templateUrl: './regiones.component.html',
  styleUrls: ['./regiones.component.css'],
})
export class RegionesComponent implements OnInit {
  paises: Pais[] = [];
  africanos: Pais[] = [];
  americanos: Pais[] = [];
  asiticos: Pais[] = [];
  europeos: Pais[] = [];
  oceanicos: Pais[] = [];
  otros: Pais[] = [];
  indice = 1;

  titulo =
    'Elige una región para realizar el filtrado, actualmente seleccionado --> (Africa)';

  constructor(private service: PaisesService) {}

  ngOnInit(): void {
    this.getPaises();
  }

  cambiarIndice(indice: number): void {
    if (indice === 1) {
      this.titulo =
        'Elige una región para realizar el filtrado, actualmente seleccionado --> (Africa)';
      this.indice = 1;
    } else if (indice === 2) {
      this.titulo =
        'Elige una región para realizar el filtrado, actualmente seleccionado --> (Americas)';
      this.indice = 2;
    } else if (indice === 3) {
      this.titulo =
        'Elige una región para realizar el filtrado, actualmente seleccionado --> (Asia)';
      this.indice = 3;
    } else if (indice === 4) {
      this.titulo =
        'Elige una región para realizar el filtrado, actualmente seleccionado --> (Europa)';
      this.indice = 4;
    } else if (indice === 5) {
      this.titulo =
        'Elige una región para realizar el filtrado, actualmente seleccionado --> (Oceania)';
      this.indice = 5;
    } else {
      this.titulo =
        'Elige una región para realizar el filtrado, actualmente seleccionado --> (Otros)';
      this.indice = 6;
    }
  }

  getPaises(): void {
    this.service.getPaises().subscribe((paises) => {
      this.paises = paises;
      this.africanos = this.paises.filter((pais) => pais.region === 'Africa');
      this.americanos = this.paises.filter(
        (pais) => pais.region === 'Americas'
      );
      this.asiticos = this.paises.filter((pais) => pais.region === 'Asia');
      this.europeos = this.paises.filter((pais) => pais.region === 'Europe');
      this.oceanicos = this.paises.filter((pais) => pais.region === 'Oceania');
      this.otros = this.paises.filter(
        (pais) => pais.region === 'Polar' || pais.region === ''
      );
      const suma =
        this.africanos.length +
        this.americanos.length +
        this.asiticos.length +
        this.europeos.length +
        this.oceanicos.length +
        this.otros.length;
      console.log(
        'Suma de paises por regiones: ' +
          suma +
          ', total de paises: ' +
          this.paises.length
      );
    });
  }
}
