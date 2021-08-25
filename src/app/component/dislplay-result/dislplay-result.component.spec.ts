import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DislplayResultComponent } from './dislplay-result.component';

describe('DislplayResultComponent', () => {
  let component: DislplayResultComponent;
  let fixture: ComponentFixture<DislplayResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DislplayResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DislplayResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
