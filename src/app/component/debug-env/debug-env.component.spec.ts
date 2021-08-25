import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugEnvComponent } from './debug-env.component';

describe('DebugEnvComponent', () => {
  let component: DebugEnvComponent;
  let fixture: ComponentFixture<DebugEnvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DebugEnvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugEnvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
