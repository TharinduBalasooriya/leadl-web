import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideListItemComponent } from './side-list-item.component';

describe('SideListItemComponent', () => {
  let component: SideListItemComponent;
  let fixture: ComponentFixture<SideListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
