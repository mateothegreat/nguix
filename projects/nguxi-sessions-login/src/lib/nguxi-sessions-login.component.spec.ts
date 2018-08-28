import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguxiSessionsLoginComponent } from './nguxi-sessions-login.component';

describe('NguxiSessionsLoginComponent', () => {
  let component: NguxiSessionsLoginComponent;
  let fixture: ComponentFixture<NguxiSessionsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguxiSessionsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguxiSessionsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
