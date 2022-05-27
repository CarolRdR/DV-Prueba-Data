import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDateComponent } from './form-date/form-date.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormDateComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormDateModule {}
