import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-dark-knight-rises',
  templateUrl: './the-dark-knight-rises.component.html',
  styleUrls: ['./the-dark-knight-rises.component.css']
})
export class TheDarkKnightRisesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('added to cart');
    console.log("added");
    
  }

}
