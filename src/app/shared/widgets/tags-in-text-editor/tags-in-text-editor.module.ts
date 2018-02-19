import {TagsInTextEditorComponent} from './tags-in-text-editor.component';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CompiledHtmlComponent} from './compiled-html/compiled-html.component';
import {TagsInTextEditorStore} from './tags-in-text-editor.store';

@NgModule({
  imports: [
    CommonModule,

  ],
  declarations: [
    TagsInTextEditorComponent,
    CompiledHtmlComponent
  ],
  providers: [
    TagsInTextEditorStore
  ],
  exports: [
    TagsInTextEditorComponent
  ]
})
export class TagsInTextEditorModule { }
