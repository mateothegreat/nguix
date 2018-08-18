import { TestBed, inject } from '@angular/core/testing';

import { LayoutLeftToolbarService } from './layout-left-toolbar.service';

describe('LayoutLeftToolbarService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LayoutLeftToolbarService]
    });
  });

  it('should be created', inject([LayoutLeftToolbarService], (service: LayoutLeftToolbarService) => {
    expect(service).toBeTruthy();
  }));
});
