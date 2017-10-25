import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-se7en',
  templateUrl: './se7en.component.html',
  styleUrls: ['./se7en.component.css']
})
export class Se7enComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('added to cart');
    console.log("added");
  }

}
