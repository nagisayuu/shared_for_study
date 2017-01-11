import { Component, OnInit } from 'angular2/core';
import { Articlelist } from './articlelist.component';

@Component({
  template: `
    <h1>{{ title }}</h1>
    <my-articlelist [mode]="'large'" ></my-articlelist>
  `,
  directives: [Articlelist],
})
export class BlogComponent implements OnInit {

  title: string;

  ngOnInit() {
    this.title = 'ARTICLES';
  }

}
