import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NguiAdminComponent } from './ngui-admin.component';

describe('NguiAdminComponent', () => {
  let component: NguiAdminComponent;
  let fixture: ComponentFixture<NguiAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NguiAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NguiAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
