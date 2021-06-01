import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  // https://restcountries.eu/rest/v2/all
  private urlEndpoint = 'https://restcountries.eu/rest/v2/all';

  constructor(private http: HttpClient) { }

  getPaises(): Observable<any>{
    return this.http.get(`${this.http}`);
  }
}
