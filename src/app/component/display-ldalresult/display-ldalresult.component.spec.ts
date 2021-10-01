import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayLDALresultComponent } from './display-ldalresult.component';

describe('DisplayLDALresultComponent', () => {
  let component: DisplayLDALresultComponent;
  let fixture: ComponentFixture<DisplayLDALresultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayLDALresultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayLDALresultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
