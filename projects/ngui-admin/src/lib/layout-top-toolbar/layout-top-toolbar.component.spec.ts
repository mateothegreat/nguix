import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutTopToolbarComponent } from './layout-top-toolbar.component';

describe('LayoutTopToolbarComponent', () => {
  let component: LayoutTopToolbarComponent;
  let fixture: ComponentFixture<LayoutTopToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutTopToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutTopToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
