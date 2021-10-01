import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodevariableValuesComponent } from './nodevariable-values.component';

describe('NodevariableValuesComponent', () => {
  let component: NodevariableValuesComponent;
  let fixture: ComponentFixture<NodevariableValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodevariableValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodevariableValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
