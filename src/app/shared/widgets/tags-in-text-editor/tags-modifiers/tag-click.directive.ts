import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {TagModifierHandler} from '../models';
import {ElementHelper} from './helpers/element-helper';

@Directive({
  selector: '[appTagClick]'
})
export class PhraseClickDirective implements OnInit {
  @Input('appTagClick') tagsModifierHandler: TagModifierHandler | undefined;
  private elementHelper: ElementHelper;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementHelper = new ElementHelper(this.elementRef, this.renderer);
  }

  ngOnInit() {
    this.elementHelper.appendText();
    this.elementHelper.addClass(['phrase', 'phrase-click']);
    this.elementHelper.checkValidation();
  }

  @HostListener('click', [])
  onClick() {
    const dataTag = this.elementHelper.getDataTag();
    const newText = this.tagsModifierHandler.onTagClick(dataTag.name);
    this.elementHelper.setNewText(newText);
    this.elementHelper.appendText();
    this.elementHelper.setValue(newText);
    this.elementHelper.checkValidation();
  }
}
