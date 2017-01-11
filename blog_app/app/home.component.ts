import { Component, OnInit } from 'angular2/core';

@Component({
  template: `
      <h1>{{title}}</h1>
      <img class="logo" src="https://5a2f21e2ab6046465d69ab5ffd597737265b3816-www.googledrive.com/host/0B0b09VuqaAG8dGQ5T095ZHRKakU"/>
  `,
  styles:[`
    .logo{
      margin: auto;
      display: block;
      max-width: 300px;
    }
  `],
})
export class HomeComponent implements OnInit {

  title: string;

  ngOnInit() {
    this.title = 'ANGULAR2 BLOG';
  }
}
