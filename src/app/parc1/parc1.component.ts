import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parc1',
  templateUrl: './parc1.component.html',
  styleUrls: ['./parc1.component.css']
})
export class Parc1Component implements OnInit {

  counter = -1;
  counterStatus = false;
  itemArray = [];

  constructor() { }

  ngOnInit() {
  }

  addItem() {
    this.counter += 1;
    if(this.counter > -1) {
      this.counterStatus = true;
    }
    this.itemArray.push(this.counter);
  }

  isOdd() {
    return this.counter % 2 === 0;
  }

}
