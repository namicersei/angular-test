import {Directive, ElementRef, OnInit} from '@angular/core';

@Directive({
  selector: '[appDirTestDirective]'
})
export class DirTestDirective implements OnInit {

  constructor(private elementRef: ElementRef) {

  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }

}
