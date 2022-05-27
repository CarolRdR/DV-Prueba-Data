import { TestBed } from '@angular/core/testing';
import {
  HttpTestingController,
  HttpClientTestingModule,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';

const mockApiKey: any = {
  api_key: '3df59e63d1bb69780247bd2ab5347e65s',
};

describe('ApiService', () => {
  let service: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('When api is called', () => {
    it('httpClient should be called', () => {
      service.dateApi(mockApiKey).subscribe((response: any) => {
        expect(response).not.toBe(null);
        expect(JSON.stringify(response)).toEqual(JSON.stringify(mockApiKey));
      });

      const req = httpTestingController.expectOne({
        method: 'POST',
        url: 'https://dvapitest.herokuapp.com/api.php',
      });

      expect(req.request.url).toBe('https://dvapitest.herokuapp.com/api.php');

      req.flush(mockApiKey);
    });
  });
});
