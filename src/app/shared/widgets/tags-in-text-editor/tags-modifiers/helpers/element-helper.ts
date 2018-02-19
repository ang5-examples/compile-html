import {ElementRef, Renderer2} from '@angular/core';

export class ElementHelper {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  appendText(text: string) {
    const textEl = this.renderer.createText(text);
    this.renderer.appendChild(this.elementRef.nativeElement, textEl);
  }

  setAttribute(name: string, value: string) {
    this.renderer.setAttribute(this.elementRef.nativeElement, name, value);
  }

  addClass(classes: string[]) {
    classes.forEach(item => {
      this.renderer.addClass(this.elementRef.nativeElement, item);
    });
  }
}
