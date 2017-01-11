System.register(['angular2/core', 'angular2/router', './home.component', './blog.component', './article.component', './article.service', './articlelist.component'], function(exports_1, context_1) {
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
    var core_1, router_1, home_component_1, blog_component_1, article_component_1, article_service_1, articlelist_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (blog_component_1_1) {
                blog_component_1 = blog_component_1_1;
            },
            function (article_component_1_1) {
                article_component_1 = article_component_1_1;
            },
            function (article_service_1_1) {
                article_service_1 = article_service_1_1;
            },
            function (articlelist_component_1_1) {
                articlelist_component_1 = articlelist_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n    <nav class=\"globalNav\">\n      <!--\n        \u3053\u3053\u306B@RouteConfig\u3067\u8A2D\u5B9A\u3057\u305Fname\u3092\u6307\u5B9A\u3059\u308B\n        routerLink\u3092\u66F8\u304F\u306B\u306F directives:[ROUTER_DIRECTIVES] \u306E\u5B9A\u7FA9\u304C\u5FC5\u8981\n      -->\n      <a [routerLink]=\"['Home']\">HOME</a>\n      <a [routerLink]=\"['Blog']\">ARTICLES</a>\n    </nav>\n    <!-- \u3053\u3053\u306B@RouteConfig\u3067\u8A2D\u5B9A\u3057\u305F\u30C6\u30F3\u30D7\u30EC\u30FC\u30C8\u304C\u8868\u793A\u3055\u308C\u308B -->\n    <div class=\"main\">\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"footer\">\n      <h3>ARTICLES</h3>\n      <my-articlelist></my-articlelist>\n    </div>\n  ",
                        styles: ["\n  "],
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                            articlelist_component_1.Articlelist
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS,
                            article_service_1.ArticleService
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: home_component_1.HomeComponent,
                            useAsDefault: true
                        },
                        {
                            path: '/blog',
                            name: 'Blog',
                            component: blog_component_1.BlogComponent,
                        },
                        {
                            path: '/blog/:id',
                            name: 'Article',
                            component: article_component_1.ArticleComponent,
                        },
                    ]), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map