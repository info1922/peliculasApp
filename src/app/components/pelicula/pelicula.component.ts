import { Component, OnInit } from '@angular/core';
// Servicio
import { PeliculasService } from '../../services/peliculas.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styles: []
})
export class PeliculaComponent implements OnInit {

  regresarA: string;
  pelicula: any;
  buscar = '';
  busqueda = '';
  constructor(public _ps: PeliculasService,
    public _ar: ActivatedRoute) {

    // Revisamos el parametro mandado
    this._ar.params.subscribe(parametros => {
      console.log(parametros);
      this.regresarA = parametros['pag'];

      if (parametros['busqueda']) {
        this.busqueda = parametros['busqueda'];
      }

      this._ps.getPelicula(parametros['id']).subscribe( pelicula => {
        this.pelicula = pelicula;
      });

    });
  }

  ngOnInit() {
  }

}
