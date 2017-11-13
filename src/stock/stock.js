"use strict";
exports.__esModule = true;
var Stock = /** @class */ (function () {
    function Stock(_ref, _quantite) {
        this.ref = _ref;
        this.quantite = _quantite;
        Stock.STOCK_COUNT++;
        console.log("CREATING STOCK NUMBER " + Stock.STOCK_COUNT);
    }
    Stock.prototype.getRef = function () {
        return this.ref;
    };
    Stock.prototype.sayHello = function () {
        console.log("Hello, world!!");
    };
    Stock.STOCK_COUNT = 0;
    return Stock;
}());
exports.Stock = Stock;
var stock = new Stock("ref 1", 10);
console.log("Ref: " + stock.getRef());
stock.sayHello();
