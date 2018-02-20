import {ElementRef, Renderer2} from '@angular/core';
import {DataTag} from '../../models';
import {parse, transform} from 'relaxed-json';

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

  getText() {
    return this.elementRef.nativeElement.innerHTML;
  }

  // specific
  getDataTag(): DataTag {
    let data: any = {
      title: 'invalid'
    };
    try { // one tag must not break the whole process
      const rowData = this.elementRef.nativeElement.getAttribute('data-tag');
      const rowDataT = transform(rowData); // because single quotes JSON.parse cannot process
      data = JSON.parse(rowDataT);
    } catch {
      throw Error('Invalid data-tag. Cannot Parse.');
    }

    return {
      title: data['title']
    };
  }

  setDataTag(dataTag: DataTag) {
    const str = JSON.stringify(dataTag).replace(/"/g, '\''); // we need no double quotes
    this.setAttribute('data-tag', str);
  }
}
