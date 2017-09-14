import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from "./app.router";

import { AppComponent } from './app.component';
import { MoviesComponent } from './movies.component';
import { TvshowsComponent } from './tvshows.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ListMoviesService } from './listmovies.service';


@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TvshowsComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    CarouselModule.forRoot(),
    routes,
    
  ],
  providers: [ListMoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
