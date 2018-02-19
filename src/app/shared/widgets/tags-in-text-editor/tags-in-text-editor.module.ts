import {TagsInTextEditorComponent} from './tags-in-text-editor.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompiledHtmlComponent} from './compiled-html/compiled-html.component';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    TagsInTextEditorComponent,
    CompiledHtmlComponent
  ],
  exports: [
    TagsInTextEditorComponent
  ]
})
export class TagsInTextEditorModule { }
