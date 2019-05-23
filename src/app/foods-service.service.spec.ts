import { TestBed } from '@angular/core/testing';

import { FoodsServiceService } from './foods-service.service';

describe('FoodsServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FoodsServiceService = TestBed.get(FoodsServiceService);
    expect(service).toBeTruthy();
  });
});
