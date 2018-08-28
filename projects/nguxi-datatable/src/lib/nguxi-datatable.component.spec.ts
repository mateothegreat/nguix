import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguxiDatatableComponent } from './nguxi-datatable.component';

describe('NguxiDatatableComponent', () => {
  let component: NguxiDatatableComponent;
  let fixture: ComponentFixture<NguxiDatatableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguxiDatatableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguxiDatatableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
