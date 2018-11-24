import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSelectionComponent } from './price-selection.component';

describe('PriceSelectionComponent', () => {
  let component: PriceSelectionComponent;
  let fixture: ComponentFixture<PriceSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
