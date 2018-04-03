import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-dir-test',
  templateUrl: './dir-test.component.html',
  styleUrls: ['./dir-test.component.css']
})
export class DirTestComponent implements OnInit {

  oddNo = [1, 3, 5];
  evenNo = [2, 4];
  showEven = true;
  switchVal = 5;

  constructor() {
  }

  ngOnInit() {
  }

}
