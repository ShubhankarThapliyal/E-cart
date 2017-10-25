import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seven-years-in-tibet',
  templateUrl: './seven-years-in-tibet.component.html',
  styleUrls: ['./seven-years-in-tibet.component.css']
})
export class SevenYearsInTibetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    alert('added to cart');
    console.log("added");
  }

}
