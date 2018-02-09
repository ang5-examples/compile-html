import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PhraseTextEditorComponent} from './phrase-text-editor/phrase-text-editor.component';
import {CompiledHtmlComponent} from './phrase-text-editor/compiled-html.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    CompiledHtmlComponent,

    PhraseTextEditorComponent
  ],
  exports: [
    PhraseTextEditorComponent
  ]
})
export class SharedModule { }
