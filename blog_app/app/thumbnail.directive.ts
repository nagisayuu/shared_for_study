import {Component, Input} from 'angular2/core';
import { ROUTER_DIRECTIVES, Router } from 'angular2/router';
import Article from './article';

@Component({
  selector: 'my-thumbnail',
  template: `<div class="thumbnail" (click)="gotoArticle( article.id )">x</div>`,
  styles:[`
    .thumbnail{
      padding-top: 30px;
      margin:0 2%;
      display: inline-block;
      box-sizing: border-box;
      width: 21%;
      height: 100px;
      border-radius: 4px;
      text-align: center;
      background-color: #00aaff;
      color: #fff;
    }
    .thumbnail:hover{
      cursor: pointer;
    }
  `]
})
export class ThumbnailDirective {

  @Input() article :Article;

  constructor(
    private _router: Router
  ){
  }

  gotoArticle( id ) {
    let link = ['Article', { id: id }];
    this._router.navigate(link);
  }

}

