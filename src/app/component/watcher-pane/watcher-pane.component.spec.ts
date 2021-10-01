import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatcherPaneComponent } from './watcher-pane.component';

describe('WatcherPaneComponent', () => {
  let component: WatcherPaneComponent;
  let fixture: ComponentFixture<WatcherPaneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatcherPaneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WatcherPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
