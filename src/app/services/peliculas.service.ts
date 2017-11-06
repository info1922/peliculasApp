import { Injectable } from '@angular/core';

// jsonp
import { Jsonp } from '@angular/http';
import 'rxjs/Rx'; // map

@Injectable()
export class PeliculasService {

    private apikey = '570c9e02af999a0bb42d815a2498eb67';
    private urlMoviedb = 'https://api.themoviedb.org/3/';

    constructor(private _jsp: Jsonp) { }

    // path de las imagenes
    img = `image.tmdb.org/t/p/w300`;

    getPopulares() {

        const url = `${this.urlMoviedb}discover/movie?sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

        return this._jsp.get( url )
                    .map( res => res.json());
    }

    buscarPeliculas( texto: string) {

        // tslint:disable-next-line:max-line-length
        const url = `${this.urlMoviedb}search/movie?query=${texto}&sort_by=popularity.desc&api_key=${this.apikey}&language=es&callback=JSONP_CALLBACK`;

        return this._jsp.get(url)
                        .map(res => res.json());
    }

}
