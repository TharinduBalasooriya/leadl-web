import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetJsonsComponent } from './projet-jsons.component';

describe('ProjetJsonsComponent', () => {
  let component: ProjetJsonsComponent;
  let fixture: ComponentFixture<ProjetJsonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetJsonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetJsonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
