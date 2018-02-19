import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagsInTextEditorComponent} from './tags-in-text-editor/tags-in-text-editor.component';
import {CompiledHtmlComponent} from './compiled-html.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CompiledHtmlComponent,

    TagsInTextEditorComponent
  ],
  exports: [
    TagsInTextEditorComponent
  ]
})
export class SharedModule { }
