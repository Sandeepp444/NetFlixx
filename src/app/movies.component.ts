import { Component, OnInit } from '@angular/core';
import { ListMoviesService } from './listmovies.service';
import { IMovies } from "./movies";
@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
  providers:[ListMoviesService]
  
})
export class MoviesComponent {
   imovies: IMovies[];
   errorString:string;
      
  constructor(private _listmoviesService:ListMoviesService) { }
  ngOnInit(){
    this._listmoviesService.getMovies()
    .subscribe(imovies => this.imovies= imovies,
    error => this.errorString =<any>error);
  }
}
  

