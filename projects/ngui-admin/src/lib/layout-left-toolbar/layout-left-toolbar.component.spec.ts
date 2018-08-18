import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutLeftToolbarComponent } from './layout-left-toolbar.component';

describe('LayoutLeftToolbarComponent', () => {
  let component: LayoutLeftToolbarComponent;
  let fixture: ComponentFixture<LayoutLeftToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutLeftToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutLeftToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
