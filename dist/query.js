"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Query = void 0;
var array_1 = require("./array");
var Query = /** @class */ (function () {
    function Query() {
    }
    Query.prototype.execute = function (id) {
        return array_1.array.find(function (arr, i) { return id === i; });
    };
    return Query;
}());
exports.Query = Query;
//# sourceMappingURL=query.js.map