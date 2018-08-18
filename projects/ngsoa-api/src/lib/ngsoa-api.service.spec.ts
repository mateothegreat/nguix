import { TestBed, inject } from '@angular/core/testing';

import { NgsoaApiService } from './ngsoa-api.service';

describe('NgsoaApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgsoaApiService]
    });
  });

  it('should be created', inject([NgsoaApiService], (service: NgsoaApiService) => {
    expect(service).toBeTruthy();
  }));
});
