import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCostCalcComponent } from './product-cost-calc.component';

describe('ProductCostCalcComponent', () => {
  let component: ProductCostCalcComponent;
  let fixture: ComponentFixture<ProductCostCalcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductCostCalcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCostCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
