import { TestBed, inject } from '@angular/core/testing';

import { LayoutTopToolbarService } from './layout-top-toolbar.service';

describe('LayoutTopToolbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutTopToolbarService]
    });
  });

  it('should be created', inject([LayoutTopToolbarService], (service: LayoutTopToolbarService) => {
    expect(service).toBeTruthy();
  }));
});
