import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {PhraseModifierHandler} from '../models';

@Directive({
  selector: '[appPhraseClick]'
})
export class PhraseClickDirective implements OnInit {
  @Input('appPhraseClick') phraseModifierHandler: PhraseModifierHandler | undefined;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    const text = this.renderer.createText('this.data.title');
    this.renderer.appendChild(this.elementRef.nativeElement, text);

    this.renderer.addClass(this.elementRef.nativeElement, 'phrase');
    this.renderer.addClass(this.elementRef.nativeElement, 'phrase-valid');
    this.renderer.addClass(this.elementRef.nativeElement, 'phrase-click');
  }

  @HostListener('click', [])
  onClick() {
    const test = this.phraseModifierHandler.onPhraseClick();
    alert(test);
  }
}
