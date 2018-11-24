import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReparationMainComponent } from './reparation-main.component';

describe('ReparationMainComponent', () => {
  let component: ReparationMainComponent;
  let fixture: ComponentFixture<ReparationMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReparationMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReparationMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
