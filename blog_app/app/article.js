System.register(['./articleinfo'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var articleinfo_1;
    var Article;
    return {
        setters:[
            function (articleinfo_1_1) {
                articleinfo_1 = articleinfo_1_1;
            }],
        execute: function() {
            Article = (function (_super) {
                __extends(Article, _super);
                function Article() {
                    _super.apply(this, arguments);
                }
                return Article;
            }(articleinfo_1.default));
            exports_1("default", Article);
        }
    }
});
//# sourceMappingURL=article.js.map