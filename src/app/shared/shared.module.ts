import {NgModule} from '@angular/core';
import {DynamicComponentComponent} from './dynamic-component/dynamic-component.component';
import {CommonModule} from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    DynamicComponentComponent
  ],
  exports: [
    DynamicComponentComponent
  ]
})
export class SharedModule { }
