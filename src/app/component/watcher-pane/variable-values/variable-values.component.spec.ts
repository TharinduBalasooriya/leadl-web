import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableValuesComponent } from './variable-values.component';

describe('VariableValuesComponent', () => {
  let component: VariableValuesComponent;
  let fixture: ComponentFixture<VariableValuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableValuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableValuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
