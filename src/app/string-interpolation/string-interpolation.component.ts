import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css']
})
export class StringInterpolationComponent implements OnInit {

  age = 100;
  firstname:string = "John";
  person ={
    firstname: "John",
    lastname: "Bro",
    age: 50,
    address: "Route 100"
  }

  constructor() { }

  ngOnInit() {
  }

}
