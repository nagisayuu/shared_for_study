import {Component, OnInit, Input} from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import Articleinfo from './articleinfo';
import { ArticleService } from './article.service';

@Component({
  selector: 'my-articlelist',
  template: `
    <div *ngIf="mode==='large'">
      <div [routerLink]="['Article', { id: article.id }]" class="panel" *ngFor="#article of articles">
        <h2>{{article.title}}</h2>
      </div>
    </div>
    <ul *ngIf="mode!=='large'">
      <li *ngFor="#article of articles">
        <a [routerLink]="['Article', { id: article.id }]">{{article.title}}</a>
      </li>
    </ul>
  `,
  styles:[`
    .panel{
      margin: 1%;
      padding: 40px;
      display: inline-block;
      width: 23%;
      min-height: 200px;
      box-sizing: border-box;
      background-color: #fafafa;
      box-shadow: 1px 1px 3px #aaa;
      color: #aaa;
      border-radius: 4px;
      vertical-align: top;
      text-align: center;
    }
    .panel:hover{
      box-shadow: 1px 1px 3px #555;
      color: #555;
      cursor: pointer;
    }
    ul{
      margin: 20px 0;
      padding:0;
    }
    li{
      margin:0;
      padding:0;
      list-style: none;
    }
  `],
  directives: [ROUTER_DIRECTIVES],
})
export class Articlelist implements OnInit {

  @Input() mode: string;

  articles: Articleinfo[];

  constructor(
    private _router: Router,
    private _articleService: ArticleService
  ){
  }

  ngOnInit() {
    this.getArticles();
  }

  getArticles() {
    this._articleService.getArticleInfos().subscribe((articles: Articleinfo[]) => this.articles = articles);
  }


  gotoArticle( id ) {
    let link = ['Article', { id: id }];
    this._router.navigate(link);
  }

}

