import { TestBed, inject } from '@angular/core/testing';

import { NguxiSessionsLoginService } from './nguxi-sessions-login.service';

describe('NguxiSessionsLoginService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NguxiSessionsLoginService]
    });
  });

  it('should be created', inject([NguxiSessionsLoginService], (service: NguxiSessionsLoginService) => {
    expect(service).toBeTruthy();
  }));
});
