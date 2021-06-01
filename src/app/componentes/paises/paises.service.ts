import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pais} from './pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private urlEndpoint = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<Pais[]>{
    return this.http.get<Pais[]>(`${this.urlEndpoint}`);
  }
}
