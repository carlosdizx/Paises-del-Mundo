import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { HeaderComponent } from './componentes/header/header.component';
import {HttpClientModule} from '@angular/common/http';
import {PaisesService} from './componentes/paises/paises.service';
import {RouterModule, Routes} from '@angular/router';
import { RegionesComponent } from './componentes/paises/filtros/regiones/regiones.component';


const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'paises', component: PaisesComponent },
  { path: 'paises/:id', component: RegionesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaisesComponent,
,
RegionesComponent  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
