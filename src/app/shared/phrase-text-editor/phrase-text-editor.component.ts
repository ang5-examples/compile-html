import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {PhraseModifierHandler} from './models';
import {PhraseModifiersModule} from './phrase-modifiers/phrase-modifiers.module';

@Component({
  selector: 'app-phrase-text-editor',
  template: `
    <app-compiled-html [template]="htmlText" [componentClass]="componentClass" [imports]="imports">
    </app-compiled-html>
  `,
  styleUrls: ['./phrase-text-editor.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class PhraseTextEditorComponent implements OnInit, PhraseModifierHandler {
  htmlText: string;
  componentClass: object;
  imports = [PhraseModifiersModule];

  constructor() {}

  ngOnInit() {
    this.htmlText = `
      <p>test test test
      test test
      test <span [appPhraseEdit] data-phrase="{name: 'name', title: 'title', value: 'value'}"></span> test
      test test test</p>
      <p>test
       test test test test
       test <span [appPhraseClick]="handler" data-phrase="{name: 'name', title: 'title', value: 'value'}"></span> test
       test test test</p>
    `;

    this.componentClass = {
      handler: this as PhraseModifierHandler
    };
  }

  onPhraseClick() {
    alert('click');
    return 'return 123';
  }
}
