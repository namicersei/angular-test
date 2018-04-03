import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  value = 'from typescript';
  num = 5;
  a = 10;
  b = 11;

  constructor() { }

  ngOnInit() {
  }

  getVal() {
    return this.a > this.b ? this.a : this.b;
  }

}
