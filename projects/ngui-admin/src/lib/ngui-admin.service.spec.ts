import { TestBed, inject } from '@angular/core/testing';

import { NguiAdminService } from './ngui-admin.service';

describe('NguiAdminService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NguiAdminService]
    });
  });

  it('should be created', inject([NguiAdminService], (service: NguiAdminService) => {
    expect(service).toBeTruthy();
  }));
});
