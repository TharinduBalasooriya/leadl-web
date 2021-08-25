import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideNavComponentComponent } from './side-nav-component.component';

describe('SideNavComponentComponent', () => {
  let component: SideNavComponentComponent;
  let fixture: ComponentFixture<SideNavComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideNavComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideNavComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
