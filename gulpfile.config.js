'use strict';
var GulpConfig = (function () {
    function GulpConfig() {
        this.source = './src/';
        this.dist = '/';
        this.tsOutputPath = this.dist;
        this.allJavaScript = [this.dist + '/**/*.js'];
        this.allTypeScript = this.source + '/**/*.ts';

        this.typings = './typings/';
        this.libraryTypeScriptDefinitions = './typings/**/*.ts';
        this.appTypeScriptReferences = this.typings + 'app.exports.ts';
    }
    return GulpConfig;
})();
module.exports = GulpConfig;
