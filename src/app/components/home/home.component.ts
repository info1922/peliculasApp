import { Component, OnInit } from '@angular/core';

// Servicio
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

    pelis: any[] = [];
    peli: any[] = [];

    cartelera: any[] = [];

    constructor( public _ps: PeliculasService) {

        this._ps.getCartelera()
                .subscribe( data => {
                    this.cartelera = data;
                    console.log('Cartelera: ', this.cartelera);
                });

        this._ps.getPopulares()
                .subscribe(data => {
                this.pelis = data;
        });
    }

  ngOnInit() {
  }



}
