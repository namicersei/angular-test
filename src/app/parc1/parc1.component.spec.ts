import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Parc1Component } from './parc1.component';

describe('Parc1Component', () => {
  let component: Parc1Component;
  let fixture: ComponentFixture<Parc1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Parc1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Parc1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
