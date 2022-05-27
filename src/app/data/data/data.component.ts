import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseDataI } from 'src/app/model/interfaces';
import { StoreService } from 'src/app/services/store.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  errorMessage = '';
  dataList: any = [];
  moreInfoList: any = [];
  closeResult: string = '';

  constructor(public store: StoreService, private modalService: NgbModal) {}

  ngOnInit(): void {
    this.store.getData().subscribe({
      next: (data) => {
        this.dataList = data;

        return this.dataList;
      },
      error: (error) => {
        this.errorMessage = error;
      },
    });
  }

  moreInfo(content: any) {
    this.modalService
      .open(content, {
        ariaLabelledBy: 'modal-title',
        windowClass: 'center-modal',
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
