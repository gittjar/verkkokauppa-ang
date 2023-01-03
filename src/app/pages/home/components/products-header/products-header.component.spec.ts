import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsHeaderComponent } from './products-header.component';

describe('ProductsHeaderComponent', () => {
  let component: ProductsHeaderComponent;
  let fixture: ComponentFixture<ProductsHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProductsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
