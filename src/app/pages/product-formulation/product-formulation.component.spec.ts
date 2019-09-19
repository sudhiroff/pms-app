import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFormulationComponent } from './product-formulation.component';

describe('ProductFormulationComponent', () => {
  let component: ProductFormulationComponent;
  let fixture: ComponentFixture<ProductFormulationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFormulationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFormulationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
