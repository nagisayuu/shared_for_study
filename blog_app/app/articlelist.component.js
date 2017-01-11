System.register(['angular2/core', 'angular2/router', './article.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, article_service_1;
    var Articlelist;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            }],
        execute: function() {
            Articlelist = (function () {
                function Articlelist(_router, _articleService) {
                    this._router = _router;
                    this._articleService = _articleService;
                }
                Articlelist.prototype.ngOnInit = function () {
                    this.getArticles();
                };
                Articlelist.prototype.getArticles = function () {
                    var _this = this;
                    this._articleService.getArticleInfos().subscribe(function (articles) { return _this.articles = articles; });
                };
                Articlelist.prototype.gotoArticle = function (id) {
                    var link = ['Article', { id: id }];
                    this._router.navigate(link);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', String)
                ], Articlelist.prototype, "mode", void 0);
                Articlelist = __decorate([
                    core_1.Component({
                        selector: 'my-articlelist',
                        template: "\n    <div *ngIf=\"mode==='large'\">\n      <div [routerLink]=\"['Article', { id: article.id }]\" class=\"panel\" *ngFor=\"#article of articles\">\n        <h2>{{article.title}}</h2>\n      </div>\n    </div>\n    <ul *ngIf=\"mode!=='large'\">\n      <li *ngFor=\"#article of articles\">\n        <a [routerLink]=\"['Article', { id: article.id }]\">{{article.title}}</a>\n      </li>\n    </ul>\n  ",
                        styles: ["\n    .panel{\n      margin: 1%;\n      padding: 40px;\n      display: inline-block;\n      width: 23%;\n      min-height: 200px;\n      box-sizing: border-box;\n      background-color: #fafafa;\n      box-shadow: 1px 1px 3px #aaa;\n      color: #aaa;\n      border-radius: 4px;\n      vertical-align: top;\n      text-align: center;\n    }\n    .panel:hover{\n      box-shadow: 1px 1px 3px #555;\n      color: #555;\n      cursor: pointer;\n    }\n    ul{\n      margin: 20px 0;\n      padding:0;\n    }\n    li{\n      margin:0;\n      padding:0;\n      list-style: none;\n    }\n  "],
                        directives: [router_1.ROUTER_DIRECTIVES],
                    }), 
                    __metadata('design:paramtypes', [router_1.Router, article_service_1.ArticleService])
                ], Articlelist);
                return Articlelist;
            }());
            exports_1("Articlelist", Articlelist);
        }
    }
});
//# sourceMappingURL=articlelist.component.js.map