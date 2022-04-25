"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store() {
        this.store = [];
    }
    Store.prototype.register = function (type, fn) {
        this.store.push({ type: type, fn: fn });
    };
    Store.prototype.unregister = function (title) {
        var _this = this;
        this.store.filter(function (store, idx) {
            if (store.fn.name === title)
                _this.store.splice(idx, 1);
        });
    };
    Store.prototype.findByFunctionName = function (type, title) {
        return this.store.find(function (store) { return store.fn.name === title; });
    };
    return Store;
}());
exports.Store = Store;
function helloWorld(obj) {
    return { hello: "hello suka", obj: obj };
}
var store = new Store();
store.register("Command", helloWorld);
console.log(store.findByFunctionName("Command", "helloWorld"));
store.unregister("helloWorld");
console.log(store.findByFunctionName("Command", "helloWorld"));
//# sourceMappingURL=store.js.map