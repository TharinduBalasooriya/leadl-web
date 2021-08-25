import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularItemComponent } from './regular-item.component';

describe('RegularItemComponent', () => {
  let component: RegularItemComponent;
  let fixture: ComponentFixture<RegularItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
