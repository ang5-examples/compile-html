import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {ElementHelper} from './helpers/element-helper';

@Directive({
  selector: '[appTagEdit]',
})
export class PhraseEditDirective implements OnInit {
  @Input('appTagEdit') appTagEdit: any | undefined;
  private elementHelper: ElementHelper;

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
    this.elementHelper = new ElementHelper(elementRef, renderer);
  }

  ngOnInit() {
    this.elementHelper.appendText('this.data.title');
    this.elementHelper.setAttribute('contenteditable', 'true');

    this.elementHelper.addClass(['phrase', 'phrase-invalid', 'phrase-edit']);
  }

  getDataTag() {
    // this.elementRef.nativeElement
    // todo:
  }
}
