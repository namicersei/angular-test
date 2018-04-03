import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-serverlist',
  templateUrl: './serverlist.component.html',
  styleUrls: ['./serverlist.component.css']
})
export class ServerlistComponent implements OnInit {

  addstatus = 'add new server';
  addNew = false;
  creationStatus = 'Not Created';
  newServerName;
  serverCreated = false;
  serverlist = []

  constructor() {
    setTimeout(() => {
      this.addNew = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.creationStatus =  this.newServerName + ' was created';
    this.serverlist.push(this.newServerName);
  }

  onAddServerName(event: Event) {
    this.newServerName = (<HTMLInputElement>event.target) .value;
  }

}
