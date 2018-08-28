import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SessionsLoginComponent } from './sessions-login.component';

describe('SessionsLoginComponent', () => {
  let component: SessionsLoginComponent;
  let fixture: ComponentFixture<SessionsLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SessionsLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SessionsLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
