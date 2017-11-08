import { Component, OnInit } from '@angular/core';

// Servicio
import { PeliculasService } from '../../services/peliculas.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: []
})
export class BuscarComponent implements OnInit {

  buscar = '';

  constructor(public _ps: PeliculasService,
              public _ar: ActivatedRoute) {

                // Revisamos el parametro mandado
                this._ar.params.subscribe( parametros => {
                    console.log(parametros);

                    if (parametros['texto']) {
                        this.buscar = parametros['texto'];
                        this.buscarPelicula();
                    }
                });
               }

  ngOnInit() {
  }

  buscarPelicula() {

    if (this.buscar.length === 0 ) {
        return;
    }
      this._ps.buscarPeliculas(this.buscar).subscribe();

  }

}
