import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreService } from 'src/app/services/store.service';

import { DataComponent } from './data.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of, throwError } from 'rxjs';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let storeService: StoreService;

  const mockStoreService = {
    getData: jasmine.createSpy('getData'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [{ provide: StoreService, useValue: mockStoreService }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('getData from store', () => {
    it('returns a user', async () => {
      mockStoreService.getData.and.returnValue(of({}));

      fixture.detectChanges();

      expect(component).toBeTruthy();
      expect(component.store.getData).toHaveBeenCalled();
    });
    it('does not return data', async () => {
      mockStoreService.getData.and.returnValue(throwError(() => new Error()));
      fixture.detectChanges();

      expect(component).toBeTruthy();
      expect(component.store.getData).toHaveBeenCalled();
    });
  });
});
