import { Component, OnInit } from '@angular/core';

// Servicio
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar = '';

  constructor(public _ps: PeliculasService) { }

  ngOnInit() {
  }

  buscarPelicula() {
    if (this.buscar.length === 0 ) {
      return;
    }
      this._ps.buscarPeliculas(this.buscar).subscribe();

  }

}
