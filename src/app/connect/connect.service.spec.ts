import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { ConnectService } from './connect.service';

describe('ConnectService', () => {
  let service: ConnectService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [ConnectService]
    });
    service = TestBed.inject(ConnectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should connect to url', () => {
    const result = service.getPeople('Luke');
    expect(result).toBeTruthy();
  })
});
