import { Component, OnInit } from '@angular/core';
import {data} from './movie'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  /*recentMovie="None";
  public cart=[]
  public movieList=["The Dark Knight, The Dark Knight Rises, Se7en, Seven Years In Tibet,dunkirk"];
  selectedMovie(movie){
    this.recentMovie=movie;
    this.cart.push(movie);
    alert(movie +"added to cart");
  }*/

  constructor() { }

  ngOnInit() {
  }

}
