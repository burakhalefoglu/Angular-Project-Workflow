import { TestBed } from '@angular/core/testing';

import { SidebarServicesService } from './sidebar-services.service';

describe('SidebarServicesService', () => {
  let service: SidebarServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SidebarServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
