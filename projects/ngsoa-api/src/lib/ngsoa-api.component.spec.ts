import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgsoaApiComponent } from './ngsoa-api.component';

describe('NgsoaApiComponent', () => {
  let component: NgsoaApiComponent;
  let fixture: ComponentFixture<NgsoaApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgsoaApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgsoaApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
