import {AfterContentInit, AfterViewInit, Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit , AfterContentInit {
  @Output() cockpitEvent = new EventEmitter<{ serverName: string, serverContent: string }>();

  /* newServerName = '';
   newServerContent = '';*/
  @ViewChild('serverContent') serContentRef;
  @ContentChild('childViewTest') contentChildTest: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    //console.log(this.contentChildTest);
  }

  onAddServer(name) {
    this.cockpitEvent.emit({serverName: name.value, serverContent: this.serContentRef.nativeElement.value});
  }

}
