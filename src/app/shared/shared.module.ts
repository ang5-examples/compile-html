import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagsInTextEditorModule} from './widgets/tags-in-text-editor/tags-in-text-editor.module';

@NgModule({
  imports: [
    CommonModule,
    TagsInTextEditorModule
  ],
  declarations: [
  ],
  exports: [
    TagsInTextEditorModule
  ]
})
export class SharedModule { }
