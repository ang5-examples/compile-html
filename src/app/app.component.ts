import {Component, OnInit, ViewChild} from '@angular/core';
import {TagsInTextEditorComponent} from './shared/widgets/tags-in-text-editor/tags-in-text-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(TagsInTextEditorComponent) tagsInTextEditor: TagsInTextEditorComponent;
  sourceHtmlText: string;
  resultHtmlText: string;

  ngOnInit() {
    this.sourceHtmlText = `
      <p>test test test
      test test
      test <span [appTagEdit] data-tag="{name: 'name', title: 'title', value: 'value'}"></span> test
      test test test</p>
      <p>test
       test test test test
       test <span [appTagClick]="handler" data-tag="{name: 'name', title: 'title', value: 'value'}"></span> test
       test test test</p>
    `;

  }

  setText() {
    this.tagsInTextEditor.setHtmlText(this.sourceHtmlText);
  }

  getText() {
    alert('test');

    this.resultHtmlText = this.tagsInTextEditor.getText();
  }
}
