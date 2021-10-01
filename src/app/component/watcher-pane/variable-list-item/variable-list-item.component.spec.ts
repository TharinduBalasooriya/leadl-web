import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableListItemComponent } from './variable-list-item.component';

describe('VariableListItemComponent', () => {
  let component: VariableListItemComponent;
  let fixture: ComponentFixture<VariableListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VariableListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VariableListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
