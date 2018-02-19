import {Component, OnInit, ViewChild} from '@angular/core';
import {TagsInTextEditorComponent} from './shared/widgets/tags-in-text-editor/tags-in-text-editor.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild(TagsInTextEditorComponent) tagsInTextEditor: TagsInTextEditorComponent;
  resultedText: string;

  ngOnInit() {}

  getText() {
    alert('test');

    this.resultedText = this.tagsInTextEditor.getText();
  }
}
