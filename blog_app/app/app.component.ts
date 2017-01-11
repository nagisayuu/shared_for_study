import { Component, OnInit } from 'angular2/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';

import { HomeComponent } from './home.component';
import { BlogComponent } from './blog.component';
import { ArticleComponent } from './article.component';
import { ArticleService } from './article.service';
import { Articlelist } from './articlelist.component';

@Component({
  selector: 'my-app',
  template: `
    <nav class="globalNav">
      <!--
        ここに@RouteConfigで設定したnameを指定する
        routerLinkを書くには directives:[ROUTER_DIRECTIVES] の定義が必要
      -->
      <a [routerLink]="['Home']">HOME</a>
      <a [routerLink]="['Blog']">ARTICLES</a>
    </nav>
    <!-- ここに@RouteConfigで設定したテンプレートが表示される -->
    <div class="main">
      <router-outlet></router-outlet>
    </div>
    <div class="footer">
      <h3>ARTICLES</h3>
      <my-articlelist></my-articlelist>
    </div>
  `,
  styles:[`
  `],
  directives: [
    ROUTER_DIRECTIVES,
    Articlelist
  ],
  providers: [
    ROUTER_PROVIDERS,
    ArticleService
  ]
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: HomeComponent,
    useAsDefault: true
  },
  {
    path: '/blog',
    name: 'Blog',
    component: BlogComponent,
  },
  {
    path: '/blog/:id',
    name: 'Article',
    component: ArticleComponent,
  },
])

export class AppComponent  implements OnInit {

  ngOnInit() {
  }

}


