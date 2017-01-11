System.register(['angular2/core', 'angular2/router', './article'], function(exports_1, context_1) {
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
    var core_1, router_1, article_1;
    var ThumbnailDirective;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (article_1_1) {
                article_1 = article_1_1;
            }],
        execute: function() {
            ThumbnailDirective = (function () {
                function ThumbnailDirective(_router) {
                    this._router = _router;
                }
                ThumbnailDirective.prototype.gotoArticle = function (id) {
                    var link = ['Article', { id: id }];
                    this._router.navigate(link);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', article_1.default)
                ], ThumbnailDirective.prototype, "article", void 0);
                ThumbnailDirective = __decorate([
                    core_1.Component({
                        selector: 'my-thumbnail',
                        template: "<div class=\"thumbnail\" (click)=\"gotoArticle( article.id )\">x</div>",
                        styles: ["\n    .thumbnail{\n      padding-top: 30px;\n      margin:0 2%;\n      display: inline-block;\n      box-sizing: border-box;\n      width: 21%;\n      height: 100px;\n      border-radius: 4px;\n      text-align: center;\n      background-color: #00aaff;\n      color: #fff;\n    }\n    .thumbnail:hover{\n      cursor: pointer;\n    }\n  "]
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], ThumbnailDirective);
                return ThumbnailDirective;
            }());
            exports_1("ThumbnailDirective", ThumbnailDirective);
        }
    }
});
//# sourceMappingURL=thumbnail.directive.js.map