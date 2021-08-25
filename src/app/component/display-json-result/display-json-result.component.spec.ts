import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayJsonResultComponent } from './display-json-result.component';

describe('DisplayJsonResultComponent', () => {
  let component: DisplayJsonResultComponent;
  let fixture: ComponentFixture<DisplayJsonResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayJsonResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayJsonResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
