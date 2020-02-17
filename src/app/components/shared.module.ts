import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

@NgModule({
  declarations: [
    DynamicFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicFormComponent
  ]
})
export class SharedModule { }
