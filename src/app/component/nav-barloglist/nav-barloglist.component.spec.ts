import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarloglistComponent } from './nav-barloglist.component';

describe('NavBarloglistComponent', () => {
  let component: NavBarloglistComponent;
  let fixture: ComponentFixture<NavBarloglistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarloglistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarloglistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
