import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dunkirk',
  templateUrl: './dunkirk.component.html',
  styleUrls: ['./dunkirk.component.css']
})
export class DunkirkComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('added to cart');
    console.log("added");
  }

}
