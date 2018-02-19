import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {TagModifierHandler} from './models';
import {TagsModifiersModule} from './tags-modifiers/tags-modifiers.module';

@Component({
  selector: 'app-tags-in-text-editor',
  template: `
    <app-compiled-html [template]="htmlText" [componentClass]="componentClass" [imports]="imports">
    </app-compiled-html>
  `,
  styleUrls: ['./tags-in-text-editor.component.scss'],
  encapsulation: ViewEncapsulation.Native
})
export class TagsInTextEditorComponent implements OnInit, TagModifierHandler {
  htmlText: string;
  componentClass: object;
  imports = [TagsModifiersModule];

  constructor() {}

  ngOnInit() {
    this.htmlText = `
      <p>test test test
      test test
      test <span [appTagEdit] data-tag="{name: 'name', title: 'title', value: 'value'}"></span> test
      test test test</p>
      <p>test
       test test test test
       test <span [appTagClick]="handler" data-tag="{name: 'name', title: 'title', value: 'value'}"></span> test
       test test test</p>
    `;

    this.componentClass = {
      handler: this as TagModifierHandler
    };
  }

  onTagClick() {
    alert('click');
    return 'return 123';
  }
}
