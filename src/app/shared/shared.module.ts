import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { TableModule } from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ButtonModule,
    RouterModule,
    DialogModule,
  ], 
  exports: [
    ReactiveFormsModule,
    ButtonModule,
    FormsModule,
    RouterModule,
    FormsModule,
    TableModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    ProgressBarModule
  ],
})
export class SharedModule { }
