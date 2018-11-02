webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_services/books.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json', 'x-auth-token': 'bad18eba1ff45jk7858b8ae88a77fa30' })
};
var BooksService = (function () {
    function BooksService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:3004/';
    }
    BooksService.prototype.getData = function (item) {
        var requestUrl = "" + this.baseUrl + item;
        var headers = httpOptions.headers;
        return this.http.get(requestUrl, { headers: headers, observe: 'response' });
    };
    BooksService.prototype.sendData = function (book, bookId) {
        var requestUrl = this.baseUrl + "books";
        book['id'] = bookId;
        return this.http.post(requestUrl, JSON.stringify(book), httpOptions);
    };
    BooksService.prototype.log = function (item) {
        console.log(item);
    };
    return BooksService;
}());
BooksService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
], BooksService);

var _a;
//# sourceMappingURL=books.service.js.map

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__showcase_showcase_component__ = __webpack_require__("../../../../../src/app/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'showcase', component: __WEBPACK_IMPORTED_MODULE_3__showcase_showcase_component__["a" /* ShowcaseComponent */] },
    { path: 'book/new', component: __WEBPACK_IMPORTED_MODULE_4__book_book_component__["a" /* BookComponent */] },
    { path: 'book/:id', component: __WEBPACK_IMPORTED_MODULE_4__book_book_component__["a" /* BookComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_2__search_search_component__["a" /* SearchComponent */] },
    { path: '**', redirectTo: '/showcase', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navigation></app-navigation>\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html")
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_book_component__ = __webpack_require__("../../../../../src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__ = __webpack_require__("../../../../../src/app/navigation/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__showcase_showcase_component__ = __webpack_require__("../../../../../src/app/showcase/showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__search_search_component__ = __webpack_require__("../../../../../src/app/search/search.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_books_service__ = __webpack_require__("../../../../../src/app/_services/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_8__navigation_navigation_component__["a" /* NavigationComponent */],
            __WEBPACK_IMPORTED_MODULE_9__showcase_showcase_component__["a" /* ShowcaseComponent */],
            __WEBPACK_IMPORTED_MODULE_10__search_search_component__["a" /* SearchComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_11__services_books_service__["a" /* BooksService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-wrapper\">\r\n\r\n  <form #bookForm=\"ngForm\" (ngSubmit)=\"onSubmit(bookForm.valid)\">\r\n\r\n    <h3 class=\"mb-4\">Book Info</h3>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"author\">Author</label>\r\n      <input class=\"form-control\" id=\"author\" name=\"author\" [(ngModel)]=\"currentBook.author\" required minlength=\"2\" #author=\"ngModel\" pattern=\"[^0-9]*\" [disabled]=\"currentBookId\">\r\n\r\n      <div *ngIf=\"author.invalid && (author.dirty || author.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"author.errors.required\">\r\n          Author is required.\r\n        </div>\r\n        <div *ngIf=\"author.errors.minlength\">\r\n          Author must be at least 2 characters long.\r\n        </div>\r\n        <div *ngIf=\"author.errors.pattern\">\r\n          Digits are not allowed.\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"title\">Title</label>\r\n      <input class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"currentBook.title\" required minlength=\"2\" #title=\"ngModel\" [disabled]=\"currentBookId\">\r\n\r\n      <div *ngIf=\"title.invalid && (title.dirty || title.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"title.errors.required\">\r\n          Title is required.\r\n        </div>\r\n        <div *ngIf=\"title.errors.minlength\">\r\n          Title must be at least 2 characters long.\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"isbn\">ISBN</label>\r\n      <input class=\"form-control\" id=\"isbn\" name=\"isbn\" [(ngModel)]=\"currentBook.isbn\" required minlength=\"10\" #isbn=\"ngModel\" pattern=\"[0-9]*\" [disabled]=\"currentBookId\">\r\n\r\n      <div *ngIf=\"isbn.invalid && (isbn.dirty || isbn.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"isbn.errors.required\">\r\n          ISBN is required.\r\n        </div>\r\n        <div *ngIf=\"isbn.errors.minlength\">\r\n          ISBN must be at least 10 characters long.\r\n        </div>\r\n        <div *ngIf=\"isbn.errors.pattern\">\r\n          Only digits are allowed.\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"pages\">Number of Pages</label>\r\n      <input class=\"form-control\" id=\"pages\" name=\"pages\" [(ngModel)]=\"currentBook.pages\" required #pages=\"ngModel\" pattern=\"[0-9]*\" [disabled]=\"currentBookId\">\r\n\r\n      <div *ngIf=\"pages.invalid && (pages.dirty || pages.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"pages.errors.required\">\r\n          Number of pages is required.\r\n        </div>\r\n        <div *ngIf=\"pages.errors.pattern\">\r\n          Only digits are allowed.\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"format\">Format</label>\r\n      <select class=\"form-control\" id=\"format\" name=\"format\" [(ngModel)]=\"currentBook.formatId\" [disabled]=\"currentBookId\">\r\n        <option *ngFor=\"let format of dataLists.formats\" [ngValue]=\"format.id\" [selected]=\"format.id === currentBook.formatId\">{{format.name}}</option>\r\n        <!-- <option>Paperback</option>\r\n        <option>Hardcover</option>\r\n        <option>Audiobook</option>\r\n        <option>Leather Bound</option>\r\n        <option>Spiral Bound</option> -->\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"description\">Description</label>\r\n      <textarea class=\"form-control\" id=\"description\" rows=\"3\" name=\"description\" [(ngModel)]=\"currentBook.description\" required minlength=\"10\" #description=\"ngModel\" [disabled]=\"currentBookId\"></textarea>\r\n\r\n      <div *ngIf=\"description.invalid && (description.dirty || description.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"description.errors.required\">\r\n          Description is required.\r\n        </div>\r\n        <div *ngIf=\"description.errors.minlength\">\r\n          Description must be at least 10 characters long.\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"price\">Price</label>\r\n      <input class=\"form-control\" id=\"price\" name=\"price\" [(ngModel)]=\"currentBook.price\" required #price=\"ngModel\" pattern=\"[0-9]*\" [disabled]=\"currentBookId\">\r\n\r\n      <div *ngIf=\"price.invalid && (price.dirty || price.touched)\" class=\"alert alert-danger\">\r\n        <div *ngIf=\"price.errors.required\">\r\n          Price is required.\r\n        </div>\r\n        <div *ngIf=\"price.errors.pattern\">\r\n          Only digits are allowed.\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <hr class=\"m-1 mb-5 mt-5\">\r\n\r\n    <h3 class=\"mb-4\">Publisher Info</h3>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"country\">Country</label>\r\n      <select class=\"form-control\" id=\"country\" name=\"country\" [(ngModel)]=\"currentBook.countryId\" required [disabled]=\"currentBookId\">\r\n        <option *ngFor=\"let country of dataLists.countries\" [ngValue]=\"country.id\" [selected]=\"country.id === currentBook.countryId\">{{country.name}}</option>\r\n        <!-- <option>Country #1</option>\r\n        <option>Country #2</option>\r\n        <option>Country #3</option> -->\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"city\">City</label>\r\n      <select class=\"form-control\" id=\"city\" name=\"city\" [(ngModel)]=\"currentBook.cityId\" required [disabled]=\"currentBookId\">\r\n        <ng-container *ngFor=\"let city of dataLists.cities\">\r\n          <option *ngIf=\"!(currentBook.countryId) || (city.countryId === currentBook.countryId)\" [ngValue]=\"city.id\" [selected]=\"city.id === currentBook.cityId\">{{city.name}}</option>\r\n        </ng-container>\r\n        <!-- <option>City #1</option>\r\n        <option>City #2</option>\r\n        <option>City #3</option> -->\r\n      </select>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n      <label for=\"company\">Company</label>\r\n      <select class=\"form-control\" id=\"company\" name=\"company\" [(ngModel)]=\"currentBook.companyId\" required [disabled]=\"currentBookId\">\r\n        <ng-container *ngFor=\"let company of dataLists.companies\">\r\n          <option *ngIf=\"!(currentBook.cityId) || (company.cityId === currentBook.cityId)\" [ngValue]=\"company.id\" [selected]=\"company.id === currentBook.companyId\">{{company.name}}</option>\r\n        </ng-container>\r\n        <!-- <option>Company #1</option>\r\n        <option>Company #2</option>\r\n        <option>Company #3</option> -->\r\n      </select>\r\n    </div>\r\n\r\n    <button type=\"submit\" class=\"btn btn-primary mt-4\" [disabled]=\"bookForm.invalid\" *ngIf=\"!currentBookId\">Submit</button>\r\n\r\n  </form>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_books_service__ = __webpack_require__("../../../../../src/app/_services/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookComponent = (function () {
    function BookComponent(route, router, booksService) {
        this.route = route;
        this.router = router;
        this.booksService = booksService;
        this.currentBook = {};
        this.dataLists = {};
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.currentBookId = this.route.snapshot.paramMap.get('id');
        this.prepareDataLists();
        this.booksService.getData('books').subscribe(function (answer) {
            _this.books = answer.body;
            if (_this.currentBookId) {
                _this.showBookInfo();
            }
        }, function (error) {
            console.log(error);
        });
    };
    BookComponent.prototype.showBookInfo = function () {
        var _this = this;
        this.currentBook = this.books.filter(function (item) {
            return item['id'] === parseInt(_this.currentBookId);
        })[0];
    };
    BookComponent.prototype.prepareDataLists = function () {
        var _this = this;
        var lists = ['formats', 'countries', 'cities', 'companies'];
        lists.forEach(function (item) {
            _this.booksService.getData(item).subscribe(function (answer) {
                _this.dataLists[item] = answer.body;
            }, function (error) {
                console.log(error);
            });
        });
    };
    BookComponent.prototype.onSubmit = function (formValid) {
        var _this = this;
        if (formValid) {
            var bookId = this.books.length + 1;
            this.booksService.sendData(this.currentBook, bookId).subscribe(function (answer) {
                _this.router.navigate(['/showcase']);
            }, function (error) {
                console.log(error);
            });
        }
    };
    return BookComponent;
}());
BookComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-book',
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_books_service__["a" /* BooksService */]],
        template: __webpack_require__("../../../../../src/app/book/book.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_books_service__["a" /* BooksService */]) === "function" && _c || Object])
], BookComponent);

var _a, _b, _c;
//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand navbar-light bg-light\">\r\n\r\n  <a class=\"navbar-brand\" routerLink=\"/showcase\">Book Shop</a>\r\n\r\n  <div class=\"collapse navbar-collapse\">\r\n    <ul class=\"navbar-nav\">\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/book/new\">Add New Book</a>\r\n      </li>\r\n\r\n      <li class=\"nav-item\" routerLinkActive=\"active\">\r\n        <a class=\"nav-link\" routerLink=\"/search\">Search</a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n\r\n</nav>\r\n"

/***/ }),

/***/ "../../../../../src/app/navigation/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavigationComponent = (function () {
    function NavigationComponent() {
    }
    NavigationComponent.prototype.ngOnInit = function () {
    };
    return NavigationComponent;
}());
NavigationComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-navigation',
        template: __webpack_require__("../../../../../src/app/navigation/navigation.component.html")
    }),
    __metadata("design:paramtypes", [])
], NavigationComponent);

//# sourceMappingURL=navigation.component.js.map

/***/ }),

/***/ "../../../../../src/app/search/search.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"full-width-container\">\r\n\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-xs-4\">\r\n      <form>\r\n\r\n        <h3 class=\"mb-4\">Search</h3>\r\n\r\n        <div class=\"form-group row\">\r\n\r\n          <label for=\"author\" class=\"col-sm-3 col-form-label\">Author</label>\r\n          <div class=\"col-sm-7\">\r\n            <input class=\"form-control\" id=\"author\" name=\"author\" [(ngModel)]=\"searchBook.author\" (ngModelChange)=\"filterBooks()\" #author=\"ngModel\" pattern=\"[^0-9]*\">\r\n\r\n            <div *ngIf=\"author.invalid && (author.dirty || author.touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"author.errors.pattern\">\r\n                Digits are not allowed.\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n\r\n          <label for=\"title\" class=\"col-sm-3 col-form-label\">Title</label>\r\n          <div class=\"col-sm-7\">\r\n            <input class=\"form-control\" id=\"title\" name=\"title\" [(ngModel)]=\"searchBook.title\" (ngModelChange)=\"filterBooks()\">\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n\r\n          <label for=\"isbn\" class=\"col-sm-3 col-form-label\">ISBN</label>\r\n          <div class=\"col-sm-7\">\r\n            <input class=\"form-control\" id=\"isbn\" name=\"isbn\" [(ngModel)]=\"searchBook.isbn\" (ngModelChange)=\"filterBooks()\" #isbn=\"ngModel\" pattern=\"[0-9]*\">\r\n\r\n            <div *ngIf=\"isbn.invalid && (isbn.dirty || isbn.touched)\" class=\"alert alert-danger\">\r\n              <div *ngIf=\"isbn.errors.pattern\">\r\n                Only digits are allowed.\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n          <label for=\"format\" class=\"col-sm-3 col-form-label\">Format</label>\r\n          <div class=\"col-sm-7\">\r\n            <select class=\"form-control\" id=\"format\" name=\"format\" [(ngModel)]=\"searchBook.formatId\" (ngModelChange)=\"filterBooks()\">\r\n              <option></option>\r\n              <option *ngFor=\"let format of dataLists.formats\" [ngValue]=\"format.id\">{{format.name}}</option>\r\n              <!-- <option>All</option>\r\n              <option>Paperback</option>\r\n              <option>Hardcover</option>\r\n              <option>Audiobook</option>\r\n              <option>Leather Bound</option>\r\n              <option>Spiral Bound</option> -->\r\n            </select>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n\r\n          <div class=\"col\">\r\n            <div class=\"row\">\r\n\r\n              <label for=\"page-min\" class=\"col-sm-6 col-form-label\">Pages between</label>\r\n              <div class=\"col-sm-6\">\r\n                <input class=\"form-control\" id=\"page-min\" name=\"pages-min\" [(ngModel)]=\"searchBook.pagesMin\" (ngModelChange)=\"filterBooks()\" #pagesMin=\"ngModel\" pattern=\"[0-9]*\">\r\n\r\n                <div *ngIf=\"pagesMin.invalid && (pagesMin.dirty || pagesMin.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"pagesMin.errors.pattern\">\r\n                    Only digits are allowed.\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col\">\r\n            <div class=\"row\">\r\n\r\n              <label  class=\"col-sm-2 col-form-label text-center\" for=\"page-max\">and</label>\r\n              <div class=\"col-sm-6\">\r\n                <input class=\"form-control\" id=\"page-max\" name=\"pages-max\" [(ngModel)]=\"searchBook.pagesMax\" (ngModelChange)=\"filterBooks()\" #pagesMax=\"ngModel\" pattern=\"[0-9]*\">\r\n\r\n                <div *ngIf=\"pagesMax.invalid && (pagesMax.dirty || pagesMax.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"pagesMax.errors.pattern\">\r\n                    Only digits are allowed.\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"form-group row\">\r\n\r\n          <div class=\"col\">\r\n            <div class=\"row\">\r\n\r\n              <label for=\"price-min\" class=\"col-sm-6 col-form-label\">Price between</label>\r\n              <div class=\"col-sm-6\">\r\n                <input class=\"form-control\" id=\"price-min\" name=\"price-min\" [(ngModel)]=\"searchBook.priceMin\" (ngModelChange)=\"filterBooks()\" #priceMin=\"ngModel\" pattern=\"[0-9]*\">\r\n\r\n                <div *ngIf=\"priceMin.invalid && (priceMin.dirty || priceMin.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"priceMin.errors.pattern\">\r\n                    Only digits are allowed.\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col\">\r\n            <div class=\"row\">\r\n\r\n              <label  class=\"col-sm-2 col-form-label text-center\" for=\"price-max\">and</label>\r\n              <div class=\"col-sm-6\">\r\n                <input class=\"form-control\" id=\"price-max\" name=\"price-max\" [(ngModel)]=\"searchBook.priceMax\" (ngModelChange)=\"filterBooks()\" #priceMax=\"ngModel\" pattern=\"[0-9]*\">\r\n\r\n                <div *ngIf=\"priceMax.invalid && (priceMax.dirty || priceMax.touched)\" class=\"alert alert-danger\">\r\n                  <div *ngIf=\"priceMax.errors.pattern\">\r\n                    Only digits are allowed.\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n      </form>\r\n    </div>\r\n\r\n    <div class=\"col-xs-8\">\r\n      <h3 class=\"mb-4\">List of Matched Books</h3>\r\n\r\n      <div class=\"books__container\" *ngIf=\"foundBooks.length\">\r\n        <div class=\"books__row books__row_table_header\">\r\n          <div class=\"books__col books__col_table_header_n\">\r\n            <p class=\"table_header_text\">#</p>\r\n          </div>\r\n          <div class=\"books__col books__col_table_header_info\">\r\n            <p class=\"table_header_text\">book</p>\r\n          </div>\r\n          <div class=\"books__col books__col_table_header_price\">\r\n            <p class=\"table_header_text\">price</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"books__row books__row_table_item\" *ngFor=\"let book of foundBooks; let i = index\">\r\n          <a href=\"\" routerLink=\"/book/{{book.id}}\">\r\n            <div class=\"books__col books__col_table_item_n\">\r\n              <p class=\"table_item_text\">{{i + 1}}</p>\r\n            </div>\r\n            <div class=\"books__col books__col_table_item_info\">\r\n              <p class=\"table_item_text\"><span class=\"books_author_text\">{{book.author}}</span> - <span class=\"books_title_text\">{{book.title}}</span> <span class=\"books_pages_text\">({{book.pages}} pages)</span></p>\r\n            </div>\r\n            <div class=\"books__col books__col_table_item_price\">\r\n              <p class=\"table_item_text\">{{book.price}}</p>\r\n            </div>\r\n          </a>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/search/search.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_books_service__ = __webpack_require__("../../../../../src/app/_services/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchComponent = (function () {
    function SearchComponent(booksService, route, router) {
        this.booksService = booksService;
        this.route = route;
        this.router = router;
        this.foundBooks = [];
        this.searchBook = {};
        this.dataLists = {};
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getData('books').subscribe(function (answer) {
            _this.books = answer.body;
            _this.getUrlParams();
        }, function (error) {
            console.log(error);
        });
        this.prepareDataLists();
    };
    SearchComponent.prototype.prepareDataLists = function () {
        var _this = this;
        var lists = ['formats', 'countries', 'cities', 'companies'];
        lists.forEach(function (item) {
            _this.booksService.getData(item).subscribe(function (answer) {
                _this.dataLists[item] = answer.body;
            }, function (error) {
                console.log(error);
            });
        });
    };
    SearchComponent.prototype.filterBooks = function () {
        var _this = this;
        this.foundBooks = this.books;
        this.setUrlParams();
        var _loop_1 = function (item) {
            if (!this_1.searchBook[item]) {
                delete this_1.searchBook[item];
                return "continue";
            }
            if (item.slice(0, 5) === 'price' || item.slice(0, 5) === 'pages') {
                this_1.foundBooks = this_1.foundBooks.filter(function (item2) {
                    if (item.slice(0, 5) + 'Min' in _this.searchBook && item.slice(0, 5) + 'Max' in _this.searchBook) {
                        return (item2[item.slice(0, 5)] >= parseInt(_this.searchBook[item.slice(0, 5) + 'Min']) && item2[item.slice(0, 5)] <= parseInt(_this.searchBook[item.slice(0, 5) + 'Max']));
                    }
                    else if (item.slice(0, 5) + 'Min' in _this.searchBook) {
                        return item2[item.slice(0, 5)] >= parseInt(_this.searchBook[item.slice(0, 5) + 'Min']);
                    }
                    else {
                        return item2[item.slice(0, 5)] <= parseInt(_this.searchBook[item.slice(0, 5) + 'Max']);
                    }
                });
            }
            else {
                this_1.foundBooks = this_1.foundBooks.filter(function (item2) {
                    return item2[item].toString().toLowerCase().indexOf(_this.searchBook[item].toLowerCase()) !== -1;
                });
            }
        };
        var this_1 = this;
        for (var item in this.searchBook) {
            _loop_1(item);
        }
        if (Object.keys(this.searchBook).length === 0) {
            this.foundBooks = [];
        }
    };
    SearchComponent.prototype.getUrlParams = function () {
        if (Object.keys(this.route.snapshot.queryParams).length !== 0) {
            this.paramsSubscription = this.route.snapshot.queryParams;
            for (var item in this.paramsSubscription) {
                if (item === 'formatId') {
                    this.searchBook[item] = parseInt(this.paramsSubscription[item]);
                }
                else {
                    this.searchBook[item] = this.paramsSubscription[item];
                }
            }
            this.filterBooks();
        }
    };
    SearchComponent.prototype.setUrlParams = function () {
        this.router.navigate([], {
            relativeTo: this.route,
            queryParams: this.searchBook,
            queryParamsHandling: 'merge',
            skipLocationChange: false
        });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-search',
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_books_service__["a" /* BooksService */]],
        template: __webpack_require__("../../../../../src/app/search/search.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_books_service__["a" /* BooksService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]) === "function" && _c || Object])
], SearchComponent);

var _a, _b, _c;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ "../../../../../src/app/showcase/showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h3 class=\"text-center\">List Of Books</h3>\r\n  <div class=\"books__container\" *ngIf=\"books\">\r\n    <div class=\"books__row books__row_table_header\">\r\n      <div class=\"books__col books__col_table_header_n\">\r\n        <p class=\"table_header_text\">#</p>\r\n      </div>\r\n      <div class=\"books__col books__col_table_header_info\">\r\n        <p class=\"table_header_text\">book</p>\r\n      </div>\r\n      <div class=\"books__col books__col_table_header_price\">\r\n        <p class=\"table_header_text\">price</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"books__row books__row_table_item\" *ngFor=\"let book of books\">\r\n      <a href=\"\" routerLink=\"/book/{{book.id}}\">\r\n        <div class=\"books__col books__col_table_item_n\">\r\n          <p class=\"table_item_text\">{{book.id}}</p>\r\n        </div>\r\n        <div class=\"books__col books__col_table_item_info\">\r\n          <p class=\"table_item_text\"><span class=\"books_author_text\">{{book.author}}</span> - <span class=\"books_title_text\">{{book.title}}</span> <span class=\"books_pages_text\">({{book.pages}} pages)</span></p>\r\n        </div>\r\n        <div class=\"books__col books__col_table_item_price\">\r\n          <p class=\"table_item_text\">{{book.price}}</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/showcase/showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_books_service__ = __webpack_require__("../../../../../src/app/_services/books.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShowcaseComponent = (function () {
    function ShowcaseComponent(booksService) {
        this.booksService = booksService;
    }
    ShowcaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.booksService.getData('books').subscribe(function (answer) {
            _this.books = answer.body;
        }, function (error) {
            console.log(error);
        });
    };
    return ShowcaseComponent;
}());
ShowcaseComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-showcase',
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]],
        template: __webpack_require__("../../../../../src/app/showcase/showcase.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_books_service__["a" /* BooksService */]) === "function" && _a || Object])
], ShowcaseComponent);

var _a;
//# sourceMappingURL=showcase.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    apiUrl: 'http://localhost:3004/',
    authHeader: 'x-auth-token',
    authToken: 'bad18eba1ff45jk7858b8ae88a77fa30'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map