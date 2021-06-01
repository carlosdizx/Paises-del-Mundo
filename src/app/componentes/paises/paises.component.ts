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
  constructor(private service: PaisesService) { }

  ngOnInit(): void {
    this.getPaises();
  }

  getPaises(): void{
    this.service.getPaises().subscribe( listado => this.paises = listado);
  }

}
