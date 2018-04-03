import {Directive, HostBinding, HostListener, OnInit} from '@angular/core';

@Directive({
  selector: '[appDropDownDirective]'
})
export class DropdownDirective implements OnInit {

  @HostBinding('class.open')
  isOpen = false;

  @HostListener('click') toggleOpen() {
    this.isOpen = !this.isOpen;
  }

  constructor() {

  }

  ngOnInit() {
  }

}
