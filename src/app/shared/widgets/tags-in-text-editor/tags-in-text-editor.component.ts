import {Component, Input, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {TagModifierHandler} from './models';
import {TagsModifiersModule} from './tags-modifiers/tags-modifiers.module';
import {CompiledHtmlComponent} from './compiled-html/compiled-html.component';

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
  @Input() tagsModifierHandler: TagModifierHandler;
  htmlText: string;
  componentClass: object;
  imports = [TagsModifiersModule];
  @ViewChild(CompiledHtmlComponent) compiledHtmlComponent: CompiledHtmlComponent;

  constructor() {}

  ngOnInit() {
    this.htmlText = '';
    this.componentClass = {
      handler: this as TagModifierHandler
    };
  }

  onTagClick(name: string) {
    if (!this.tagsModifierHandler) {
      throw new Error('No tagClickHandler for clickable tags provided!');
    }
    return this.tagsModifierHandler.onTagClick(name);
  }

  // outer functions, may be remade with store
  public setHtmlText(htmlText) {
    this.htmlText = htmlText;
  }

  public getText() {
    return this.compiledHtmlComponent.getSourceHtml();
  }
}
