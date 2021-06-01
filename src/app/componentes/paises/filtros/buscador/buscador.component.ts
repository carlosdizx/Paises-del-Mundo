import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css'],
})
export class BuscadorComponent implements OnInit {
  constructor() {}

  buscador = new FormControl('');

  @Output('buscador') buscadorEmitter = new EventEmitter<string>();

  ngOnInit(): void {
    this.buscador.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => this.buscadorEmitter.emit(value));
  }
}
