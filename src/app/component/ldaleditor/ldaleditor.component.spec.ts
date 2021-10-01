import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LDALEditorComponent } from './ldaleditor.component';

describe('LDALEditorComponent', () => {
  let component: LDALEditorComponent;
  let fixture: ComponentFixture<LDALEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LDALEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LDALEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
