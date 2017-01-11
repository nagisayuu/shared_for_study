import { Component, OnInit } from 'angular2/core';
import { Router, RouteParams } from 'angular2/router';

import Article from './article';
import { ArticleService } from './article.service';

@Component({
  template: `
    <h1 *ngIf="article">{{article.title}}</h1>
    <div *ngIf="article" [innerHtml]="article.content"></div>
  `,
})
export class ArticleComponent implements OnInit {

  private article: Article;

  constructor(
    private _routeParams: RouteParams,
    private _articleService: ArticleService
  ){
  }

  ngOnInit() {
    let id = this._routeParams.get('id');
    this._articleService.getArticle(id).then((article: Article) => this.article = article);
  }
}
