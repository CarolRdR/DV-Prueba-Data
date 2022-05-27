import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResponseDataI } from '../model/interfaces';

const initialState: ResponseDataI = {
  response: [
    {
      CLIENT_ID: 0,
      CLIENT_NAME: '',
      COUNTER: 0,
      DESCRIPTION: '',
      DEVICE: '',
      MORE_INFO: {
        ACTIVE: false,
        END_DATE: '',
        RELATIONS_IDS: [],
        START_DATE: '',
        WORK: '',
      },
    },
  ],
};

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  private data!: ResponseDataI;
  data$: BehaviorSubject<ResponseDataI>;

  constructor() {
    this.data$ = new BehaviorSubject(initialState);
  }
  setData(data: any) {
    this.data = data;
    console.log('Ticking next', this.data);
    this.data$.next(this.data);
  }

  getData() {
    return this.data$;
  }
}
