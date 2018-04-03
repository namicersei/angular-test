import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-module-test',
  templateUrl: './module-test.component.html',
  styleUrls: ['./module-test.component.css']
})
export class ModuleTestComponent implements OnInit {

  serverElements = [{type: 'server', name: 'testname', content: 'textcontent'}];

  constructor() {
  }

  ngOnInit() {
  }

  cockpitToModule(serverData: { serverName: string, serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  /* onAddServer() {
     this.serverElements.push({
       type: 'server',
       name: this.newServerName,
       content: this.newServerContent
     });
   }

   onAddBlueprint() {
     this.serverElements.push({
       type: 'blueprint',
       name: this.newServerName,
       content: this.newServerContent
     });
   }*/

}
