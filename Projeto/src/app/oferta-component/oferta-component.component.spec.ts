import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfertaComponentComponent } from './oferta-component.component';

describe('OfertaComponentComponent', () => {
  let component: OfertaComponentComponent;
  let fixture: ComponentFixture<OfertaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfertaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfertaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
