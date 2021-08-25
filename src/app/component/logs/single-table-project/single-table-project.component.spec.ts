import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTableProjectComponent } from './single-table-project.component';

describe('SingleTableProjectComponent', () => {
  let component: SingleTableProjectComponent;
  let fixture: ComponentFixture<SingleTableProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingleTableProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleTableProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
