import {
  Compiler, Component, Input, NgModule, OnChanges, SimpleChanges,
  ViewContainerRef
} from '@angular/core';
import {PhraseModifiers} from './phrase-modifiers/phrase-modifiers.module';

@Component({
  selector: 'app-compiled-html',
  template: ''
})
export class CompiledHtmlComponent implements OnChanges {
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

    @NgModule({declarations: [TemplateComponent], imports: [PhraseModifiers]})
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