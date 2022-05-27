import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { ApiService } from 'src/app/services/api.service';
import { Md5 } from 'ts-md5/dist/md5';
import { Router } from '@angular/router';
import { ResponseDataI } from 'src/app/model/interfaces';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-form-date',
  templateUrl: './form-date.component.html',
  styleUrls: ['./form-date.component.scss'],
})
export class FormDateComponent implements OnInit {
  dateForm!: FormGroup;
  currentDate: string | undefined;
  errorMessage = '';
  api_key!: string;
  dataList!: ResponseDataI;

  constructor(
    private fb: FormBuilder,
    private dp: DatePipe,
    public apiService: ApiService,
    private router: Router,
    private store: StoreService
  ) {
    this.currentDate = '';
  }

  ngOnInit(): void {
    this.dateForm = this.fb.group({
      date: new FormControl(new Date().toISOString().substring(0, 10)),
    });
  }

  confirmDate(api_key: any) {
    this.currentDate = this.dp
      .transform(new Date(), 'dd-MM-YYYY')
      ?.toLowerCase();

    const md5 = new Md5();
    api_key = md5.appendStr(this.currentDate!).end();
    console.log(api_key);

    this.apiService.dateApi(api_key).subscribe({
      next: (data) => {
        this.dataList = data;
        this.store.setData(this.dataList);
        this.router.navigate([`data`]);
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }
}
