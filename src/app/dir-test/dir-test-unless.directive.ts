import {Directive, Input, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[appDirTestUnlessDirective]'
})
export class DirTestUnlessDirective implements OnInit {

  @Input() set appDirTestUnlessDirective(value: boolean) {
    if (!value) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {
  }

  ngOnInit() {
  }

}
