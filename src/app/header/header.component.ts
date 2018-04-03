import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() selection = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit() {
  }

  onSelect(type: string) {
    this.selection.emit(type);
  }

}
