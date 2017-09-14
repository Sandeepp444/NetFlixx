import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { IMovies } from "./movies";
import { MoviesComponent } from './movies.component';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/Rx';

@Injectable()
export class ListMoviesService{
    private _url = "https://api.themoviedb.org/3/search/movie?query=hardware&api_key=937695235916d6958534cd9a76d4ef0a"
    constructor(private _http: Http){}
    getMovies(){
       return this._http.get(this._url)
       .map(res => <IMovies[]>res.json())
       
        .catch(this.handleError)
        .do(data => console.log(JSON.stringify(data)));
    }
    private handleError (error:Response){
        console.error(error);
        return Observable.throw(error.json().error || 'server error');
    }


}