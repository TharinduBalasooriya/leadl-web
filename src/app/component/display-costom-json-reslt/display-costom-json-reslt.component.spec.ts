import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCostomJsonResltComponent } from './display-costom-json-reslt.component';

describe('DisplayCostomJsonResltComponent', () => {
  let component: DisplayCostomJsonResltComponent;
  let fixture: ComponentFixture<DisplayCostomJsonResltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayCostomJsonResltComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCostomJsonResltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
