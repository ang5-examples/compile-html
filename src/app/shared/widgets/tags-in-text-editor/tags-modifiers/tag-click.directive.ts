import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';
import {TagModifierHandler} from '../models';

@Directive({
  selector: '[appTagClick]'
})
export class PhraseClickDirective implements OnInit {
  @Input('appTagClick') tagModifierHandler: TagModifierHandler | undefined;
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
    const test = this.tagModifierHandler.onTagClick();
    alert(test);
  }
}
