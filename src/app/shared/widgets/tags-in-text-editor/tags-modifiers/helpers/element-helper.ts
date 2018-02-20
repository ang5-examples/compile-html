import {ElementRef, Renderer2} from '@angular/core';
import {DataTag} from '../../models';
import {transform} from 'relaxed-json';

export class ElementHelper {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  appendText() {
    const dataTag = this.getDataTag();
    this.elementRef.nativeElement.innerHTML = dataTag.title;
  }

  setAttribute(name: string, value: string) {
    this.renderer.setAttribute(this.elementRef.nativeElement, name, value);
  }

  addClass(classes: string[]) {
    classes.forEach(item => {
      this.renderer.addClass(this.elementRef.nativeElement, item);
    });
  }

  removeClass(classes: string[]) {
    classes.forEach(item => {
      this.renderer.removeClass(this.elementRef.nativeElement, item);
    });
  }

  getText() {
    return this.elementRef.nativeElement.innerHTML;
  }

  // specific methods
  getDataTag(): DataTag {
    let data: any = {
      name: '',
      title: 'invalid',
      value: null
    };
    try { // one tag must not break the whole process
      const rowData = this.elementRef.nativeElement.getAttribute('data-tag');
      const rowDataT = transform(rowData); // because single quotes JSON.parse cannot process
      data = JSON.parse(rowDataT);
    } catch {
      throw Error('Invalid data-tag. Cannot Parse.');
    }

    return {
      name: data['name'],
      title: data['title'],
      value: data['value']
    };
  }

  setDataTag(dataTag: DataTag) {
    const str = JSON.stringify(dataTag).replace(/"/g, '\''); // we need no double quotes
    this.setAttribute('data-tag', str);
  }

  checkValidation() {
    this.removeClass(['phrase-invalid', 'phrase-valid']);
    const dataTag = this.getDataTag();
    const classValid = !dataTag.value ? 'phrase-invalid' : 'phrase-valid';
    this.addClass([classValid]);
  }

  setNewText(newText: string) {
    const dataTag = this.getDataTag();
    dataTag.title = newText;
    this.setDataTag(dataTag);
  }

  setValue(newValue: string) {
    const dataTag = this.getDataTag();
    dataTag.value = newValue;
    this.setDataTag(dataTag);
  }
}
