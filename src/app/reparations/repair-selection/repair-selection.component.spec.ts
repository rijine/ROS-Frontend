import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepairSelectionComponent } from './repair-selection.component';

describe('RepairSelectionComponent', () => {
  let component: RepairSelectionComponent;
  let fixture: ComponentFixture<RepairSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepairSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepairSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
