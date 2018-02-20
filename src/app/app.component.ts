import {Component, OnInit, ViewChild} from '@angular/core';
import {TagsInTextEditorComponent} from './shared/widgets/tags-in-text-editor/tags-in-text-editor.component';
import {TagModifierHandler} from './shared/widgets/tags-in-text-editor/models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, TagModifierHandler {

  @ViewChild(TagsInTextEditorComponent) tagsInTextEditor: TagsInTextEditorComponent;
  sourceHtmlText: string;
  resultHtmlText: string;
  tagsModifierHandler: TagModifierHandler;

  ngOnInit() {
    this.sourceHtmlText = `
      <p>test test test
      test test
      test <span [appTagEdit] data-tag="{'name': 'name1', 'title': 'title1', 'value': ''}"></span> test
      test test test</p>
      <p>test
       test test test test
       test <span [appTagClick]="handler" data-tag="{'name': 'name2', 'title': 'title2', 'value': ''}"></span> test
       test test test</p>
    `;

    this.tagsModifierHandler = this;
  }

  setText() {
    this.tagsInTextEditor.setHtmlText(this.sourceHtmlText);
  }

  getText() {
    this.resultHtmlText = this.tagsInTextEditor.getText();
  }

  onTagClick(name: string) {
    return '346ccvvbncv';
  }
}
