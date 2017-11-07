import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HttpModule, JsonpModule } from '@angular/http';

// Rutas
import { APPROUTING } from './app.routes';

// Services
import { PeliculasService } from './services/peliculas.service';

// Componentes
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { HomeComponent } from './components/home/home.component';
import { BuscarComponent } from './components/buscar/buscar.component';
import { PeliculaComponent } from './components/pelicula/pelicula.component';

// Pipes
import { PeliculaImagenPipe } from './pipes/pelicula-imagen.pipe';
import { MosaicoComponent } from './components/home/mosaico.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    BuscarComponent,
    PeliculaComponent,
    PeliculaImagenPipe,
    MosaicoComponent
  ],
  imports: [
    HttpModule,
    JsonpModule,
    BrowserModule,
    FormsModule,
    APPROUTING
  ],
  providers: [PeliculasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
