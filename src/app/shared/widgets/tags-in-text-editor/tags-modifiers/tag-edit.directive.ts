import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
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
    this.elementHelper.appendText();
    this.elementHelper.setAttribute('contenteditable', 'true');
    this.elementHelper.addClass(['phrase', 'phrase-edit']);
    this.elementHelper.checkValidation();
  }

  @HostListener('keydown', ['$event'])
  onEdit(event: KeyboardEvent) {
    const newText = this.elementHelper.getText();
    this.elementHelper.setNewText(newText);
    this.elementHelper.setValue(newText);
    this.elementHelper.checkValidation();
  }
}
