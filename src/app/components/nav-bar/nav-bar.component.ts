import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styles: []
})
export class NavBarComponent implements OnInit {

  constructor(public _rt: Router) { }

  ngOnInit() {
  }

  buscarPelicula( texto: string) {
    if (texto.length === 0) {
      return;
    }
    this._rt.navigate(['buscar', texto]);
    console.log( texto );
  }

}
