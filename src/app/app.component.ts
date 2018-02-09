import {Compiler, Component, NgModule, OnInit, ViewChild, ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  template: string;
  componentClass: object;

  constructor() {}

  ngOnInit() {
    this.setTemplate();
  }

  setTemplate() {
    this.template = `<h4 (click)="increaseCounter()">Click to increase: {{counter}}</h4>`;
    this.componentClass = {
      counter: 1,
      increaseCounter: function () {
        this.counter++;
      }
    };
  }
}
