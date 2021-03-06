import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PaisesComponent } from './componentes/paises/paises.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './componentes/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { PaisesService } from './componentes/paises/paises.service';
import { RouterModule, Routes } from '@angular/router';
import { RegionesComponent } from './componentes/paises/filtros/regiones/regiones.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Angular Material
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { BuscadorComponent } from './componentes/paises/filtros/buscador/buscador.component';
import { BuscadorPipe } from './componentes/paises/filtros/buscador/buscador.pipe';
import { BioComponent } from './componentes/bio/bio.component';
import { FooterComponent } from './componentes/footer/footer.component';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'bio', component: BioComponent },
  { path: 'paises', component: PaisesComponent },
  { path: 'paises/filtrado/regiones/:id', component: RegionesComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PaisesComponent,
    RegionesComponent,
    RegionesComponent,
    BuscadorComponent,
    BuscadorPipe,
    BioComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
  ],
  providers: [PaisesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
