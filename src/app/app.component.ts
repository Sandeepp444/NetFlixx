import { Component } from '@angular/core';
import { ListMoviesService } from './listmovies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[ListMoviesService]
  
})
export class AppComponent {
  title = 'app works!';
  carol: Array<any>=[];
   items: Array<any> = []
  im ={
    link: 'app/images/img8.jpg',
    link2:'app/images/img13.png',
    link3:'app/images/img16.jpg'
  }


}
