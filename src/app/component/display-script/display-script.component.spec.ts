import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayScriptComponent } from './display-script.component';

describe('DisplayScriptComponent', () => {
  let component: DisplayScriptComponent;
  let fixture: ComponentFixture<DisplayScriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayScriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayScriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
