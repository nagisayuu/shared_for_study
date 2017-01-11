System.register(['angular2/core', 'rxjs/Rx', 'rxjs/Observable', 'angular2/http', './article'], function(exports_1, context_1) {
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
    var core_1, Observable_1, http_1, article_1;
    var ArticleService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {},
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            ArticleService = (function () {
                function ArticleService(http) {
                    this.http = http;
                }
                ArticleService.prototype.getArticle = function (id) {
                    var _this = this;
                    return new Promise(function (resolve, reject) {
                        var url = "data/articles/" + id + ".html";
                        var article = new article_1.default;
                        article.id = id;
                        var extractData = function (res) {
                            if (res.status < 200 || res.status >= 300) {
                                throw new Error('Bad response status: ' + res.status);
                            }
                            _this.getArticleInfos().subscribe(function (articleInfos) {
                                var info = articleInfos.filter(function (article) { return article.id === id; })[0];
                                article.title = info.title;
                                article.content = res.text();
                                resolve(article);
                            });
                        };
                        var handleNotFound = function () {
                            article.title = '404 NOT FOUND';
                            article.content = '';
                            resolve(article);
                        };
                        _this.http.get(url).subscribe(extractData, handleNotFound);
                    });
                };
                ArticleService.prototype.getArticleInfos = function () {
                    var extractData = function (res) {
                        if (res.status < 200 || res.status >= 300) {
                            throw new Error('Bad response status: ' + res.status);
                        }
                        return res.json() || {};
                    };
                    var handleError = function (error) {
                        var errMsg = error.message || 'Server error';
                        console.error(errMsg); // log to console instead
                        return Observable_1.Observable.throw(errMsg);
                    };
                    return this.http.get('data/articles/index.json')
                        .map(extractData)
                        .catch(handleError);
                };
                ArticleService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], ArticleService);
                return ArticleService;
            }());
            exports_1("ArticleService", ArticleService);
        }
    }
});
//# sourceMappingURL=article.service.js.map