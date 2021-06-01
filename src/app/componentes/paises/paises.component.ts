import { Component, OnInit } from '@angular/core';
import {PaisesService} from './paises.service';
import {Pais} from './pais';

@Component({
  selector: 'app-paises',
  templateUrl: './paises.component.html',
  styleUrls: ['./paises.component.css']
})
export class PaisesComponent implements OnInit {

  paises: Pais[] = [];
  africanos: Pais[] = [];
  americanos: Pais[] = [];
  asiticos: Pais[] = [];
  europeos: Pais[] = [];
  oceanicos: Pais[] = [];
  polares: Pais[] = [];

  constructor(private service: PaisesService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises(): void{
    this.service.getPaises().subscribe( listado => {
      this.paises = listado;
      this.africanos = this.paises.filter(pais => pais.region === 'Africa');
      this.americanos = this.paises.filter(pais => pais.region === 'Americas');
      this.asiticos = this.paises.filter(pais => pais.region === 'Asia');
      this.europeos = this.paises.filter(pais => pais.region === 'Europe');
      this.oceanicos = this.paises.filter(pais => pais.region === 'Oceania');
      this.polares = this.paises.filter(pais => pais.region === 'Polar');
    });
  }

}
