import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {TagModifierHandler} from '../models';
import {ElementHelper} from './helpers/element-helper';

@Directive({
  selector: '[appTagClick]'
})
export class PhraseClickDirective implements OnInit {
  @Input('appTagClick') tagModifierHandler: TagModifierHandler | undefined;
  private elementHelper: ElementHelper;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementHelper = new ElementHelper(this.elementRef, this.renderer);
  }

  ngOnInit() {
    this.elementHelper.appendText('this.data.title');

    this.elementHelper.addClass(['phrase', 'phrase-valid', 'phrase-click']);
  }

  @HostListener('click', [])
  onClick() {
    const test = this.tagModifierHandler.onTagClick();
    alert(test);
  }
}
