import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LDALscriptListComponent } from './ldalscript-list.component';

describe('LDALscriptListComponent', () => {
  let component: LDALscriptListComponent;
  let fixture: ComponentFixture<LDALscriptListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LDALscriptListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LDALscriptListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
