import {ElementRef, Renderer2} from '@angular/core';
import {DataTag} from '../../models';

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
    let data = {
      title: 'invalid'
    };
    try { // one tag must not break the whole process
      const rowData = this.elementRef.nativeElement.getAttribute('data-tag');
      data = eval('(' + rowData + ')'); // to simplify json in data-tag="{}", JSON.parse cannot parse relaxed json
    } catch {
      throw Error('Invalid data-tag. Cannot Parse.');
    }

    return {
      title: data['title']
    };
  }

  setDataTag(dataTag: DataTag) {
    this.setAttribute('data-tag', JSON.stringify(dataTag));
  }
}
