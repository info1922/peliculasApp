import { Component } from '@angular/core';

// Servicio
import { PeliculasService } from './services/peliculas.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor( private _ps: PeliculasService) {
    this._ps.getPopulares().subscribe(data => console.log(data));
    this._ps.buscarPeliculas('strange').subscribe( data => console.log(data));
  }
}
