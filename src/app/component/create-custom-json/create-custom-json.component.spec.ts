import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustomJsonComponent } from './create-custom-json.component';

describe('CreateCustomJsonComponent', () => {
  let component: CreateCustomJsonComponent;
  let fixture: ComponentFixture<CreateCustomJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustomJsonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustomJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
