import { TestBed, inject } from '@angular/core/testing';

import { NguxiDatatableService } from './nguxi-datatable.service';

describe('NguxiDatatableService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NguxiDatatableService]
    });
  });

  it('should be created', inject([NguxiDatatableService], (service: NguxiDatatableService) => {
    expect(service).toBeTruthy();
  }));
});
