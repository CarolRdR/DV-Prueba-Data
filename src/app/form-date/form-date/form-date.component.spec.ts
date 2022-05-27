import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreService } from 'src/app/services/store.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormDateComponent } from './form-date.component';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { of, throwError } from 'rxjs';

describe('FormDateComponent', () => {
  let component: FormDateComponent;
  let fixture: ComponentFixture<FormDateComponent>;
  let storeService: StoreService;
  let apiService: ApiService;
  let datePipe: DatePipe;

  const mockStoreService = {
    setData: jasmine.createSpy('setData'),
  };
  const mockDatePipe = {
    transform: jasmine.createSpy('transform'),
  };
  const mockApiService = {
    apiService: jasmine.createSpy('apiService'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FormDateComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientModule,
        RouterTestingModule,
      ],
      providers: [
        { provide: StoreService, useValue: mockStoreService },
        { provide: DatePipe, useValue: mockDatePipe },
        { provide: ApiService, useValue: mockApiService },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDateComponent);
    component = fixture.componentInstance;
    storeService = TestBed.inject(StoreService);
    apiService = TestBed.inject(ApiService);
    datePipe = TestBed.inject(DatePipe);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('form-date has been called', () => {
    it('creates a date', async () => {
      mockApiService.apiService.and.returnValue(of({ test: 'test' }));
      mockStoreService.setData.and.returnValue({});
      mockDatePipe.transform.and.returnValue(
        '3df59e63d1bb69780247bd2ab5347e65s'
      );
      fixture.detectChanges();

      component.confirmDate('3df59e63d1bb69780247bd2ab5347e65s');

      expect(component).toBeTruthy();
      expect(component.apiService.dateApi).toHaveBeenCalled();
    });

    it('throws an error', async () => {
      mockStoreService.setData.and.returnValue(throwError(() => new Error()));
      mockApiService.apiService.and.returnValue(throwError(() => new Error()));

      fixture.detectChanges();
      component.dateForm.get('date')?.setValue('27-05-2022');

      component.confirmDate('');

      expect(component).toBeTruthy();

      expect(component.apiService.handleError).toHaveBeenCalled();
    });
  });
});
