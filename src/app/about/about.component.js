"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
// Import RxJs required methods
require("rxjs/add/operator/toPromise");
var AboutComponent = (function () {
    function AboutComponent(http) {
        this.http = http;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.myUrl = 'http://server1:8585/mastersV1.2/api/getModelByMake.json'; // URL to web api
        this.payLoad = {};
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.http.post(this.myUrl, this.payLoad, { headers: this.headers })
            .toPromise()
            .then(function (res) {
            console.log("res::" + JSON.stringify(res.json()));
        }).catch(this.handleError);
    };
    AboutComponent.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'about',
        templateUrl: './about.component.html',
        styleUrls: ['./about.component.css']
    }),
    __metadata("design:paramtypes", [http_1.Http])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map