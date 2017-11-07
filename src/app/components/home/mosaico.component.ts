import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mosaico',
  templateUrl: './mosaico.component.html',
  styles: []
})
export class MosaicoComponent implements OnInit {

  // La data viene de otro componente
  @Input('peliculas') peliculas;
  @Input('titulo') titulo;


  constructor() { }

  ngOnInit() {
  }

}
