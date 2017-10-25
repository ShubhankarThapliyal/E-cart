import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-the-dark-knight',
  templateUrl: './the-dark-knight.component.html',
  styleUrls: ['./the-dark-knight.component.css']
})
export class TheDarkKnightComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('added to cart');
    console.log("added");
  }

}
