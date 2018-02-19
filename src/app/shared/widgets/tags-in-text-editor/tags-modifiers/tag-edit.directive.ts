import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

class ElementHelper {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }
}

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
    const text = this.renderer.createText('this.data.title');
    this.renderer.appendChild(this.elementRef.nativeElement, text);
    this.renderer.setAttribute(this.elementRef.nativeElement, 'contenteditable', 'true');

    this.renderer.addClass(this.elementRef.nativeElement, 'phrase');
    this.renderer.addClass(this.elementRef.nativeElement, 'phrase-invalid');
    this.renderer.addClass(this.elementRef.nativeElement, 'phrase-edit');
  }

  getDataTag() {
    this.elementRef.nativeElement
    // todo:
  }
}
