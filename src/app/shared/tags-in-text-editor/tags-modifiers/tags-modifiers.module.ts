import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {PhraseEditDirective} from './tag-edit.directive';
import {PhraseClickDirective} from './tag-click.directive';


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

export class TagsModifiersModule {}
