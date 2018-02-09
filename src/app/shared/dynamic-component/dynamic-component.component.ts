import {Compiler, Component, Directive, Input, NgModule, OnChanges, SimpleChanges, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-dynamic-component',
  template: ''
})
export class DynamicComponentComponent implements OnChanges {
  @Input() template = '';
  @Input() componentClass: object = {};

  constructor(private compiler: Compiler, private container: ViewContainerRef) {}

  ngOnChanges(changes: SimpleChanges) {
    this.addComponent(changes.template.currentValue, changes.componentClass.currentValue);
  }

  private addComponent(template: string, properties: any = {}) {
    this.container.clear();

    @Component({template})
    class TemplateComponent {}

    @NgModule({declarations: [TemplateComponent]})
    class TemplateModule {}

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
}
