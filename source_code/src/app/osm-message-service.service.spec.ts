import { TestBed } from '@angular/core/testing';

import { OsmMessageServiceService } from './osm-message-service.service';

describe('OsmMessageServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OsmMessageServiceService = TestBed.get(OsmMessageServiceService);
    expect(service).toBeTruthy();
  });
});
