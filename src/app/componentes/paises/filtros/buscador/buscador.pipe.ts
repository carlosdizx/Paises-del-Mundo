import { Pipe, PipeTransform } from '@angular/core';
import {Pais} from '../../pais';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(lista: any[], texto: string): any[] {
    if (!texto){
      return lista;
    }
    return lista.filter(pais => pais.name.toUpperCase().includes(texto.toUpperCase()) )
  }

}
