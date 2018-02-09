import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PhraseEditDirective} from './phrase-edit.directive';
import {PhraseClickDirective} from './phrase-click.directive';


@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    PhraseEditDirective,
    PhraseClickDirective
  ],
  exports: [
    PhraseEditDirective,
    PhraseClickDirective
  ]
})

export class PhraseModifiersModule {}
