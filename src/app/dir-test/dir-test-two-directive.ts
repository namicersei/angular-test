import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appDirTestTwoDirective]'
})
export class DirTestTwoDirective implements OnInit {

  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  // set the alisa of proerty same name as selector like in ngClass
  // son instead of doing [highColor]="'red'" we can [appDirTestTwoDirective]="'red'"
  // @Input('appDirTestTwoDirective') highlightColor = 'blue';

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {

  }

  @HostBinding('style.backgroundColor') backgroundColor: string;

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }


  @HostListener('mouseenter') moveOver(eventData: Event) {
    //
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseExit(eventData: Event) {
    //
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }

}
