import {
  Compiler, Component, Input, NgModule, OnChanges, SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import {ViewRef_} from '@angular/core/src/view';

// using
// <app-compiled-html [template]="htmlText" [componentClass]="componentClass" [imports]="imports">
//  </app-compiled-html>

@Component({
  selector: 'app-compiled-html',
  template: ''
})
export class CompiledHtmlComponent implements OnChanges {
  @Input() template = '';
  @Input() componentClass: object = {};
  @Input() imports = [];

  constructor(private compiler: Compiler, private container: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges) {
    let currentTemplate = this.template;
    if (changes.template) {
      currentTemplate = changes.template.currentValue;
    }
    let currentComponentClass = this.componentClass;
    if (changes.componentClass) {
      currentComponentClass = changes.componentClass.currentValue;
    }
    this.addComponent(currentTemplate, currentComponentClass);
  }

  private addComponent(template: string, properties: any = {}) {
    this.container.clear();

    class TemplateComponent {}
    Component({template})(TemplateComponent);

    class TemplateModule {}
    NgModule({declarations: [TemplateComponent], imports: this.imports})(TemplateModule);

    const module = this.compiler.compileModuleAndAllComponentsSync(TemplateModule);
    const factory = module.componentFactories.find((comp) =>
      comp.componentType === TemplateComponent
    );
    const component = this.container.createComponent(factory);
    Object.assign(component.instance, properties);
    // If properties are changed at a later stage, the change detection
    // may need to be triggered manually:
    // component.changeDetectorRef.detectChanges();
  }

  // outer functions, may be remade with store
  public getSourceHtml() {
    const viewRef: ViewRef_ = this.container.get(0) as ViewRef_;
    const ngComponent = viewRef.rootNodes[0];
    return ngComponent.innerHTML;
  }
}
