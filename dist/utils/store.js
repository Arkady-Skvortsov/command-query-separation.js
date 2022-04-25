"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Store = void 0;
var Store = /** @class */ (function () {
    function Store() {
        this.store = [];
    }
    Store.prototype.register = function (type, fn) {
        this.store.push({ type: type, fn: fn });
        console.log("".concat(fn.name, " had been added in store ").concat(this.store.length));
    };
    Store.prototype.unregister = function (title) {
        this.store.filter(function (store) { return store.fn.name !== title; });
        console.log("".concat(this.store.length));
    };
    Store.prototype.findByFunctionName = function (type, title) {
        console.log(this.store.find(function (store) { return store.type === type && store.fn.name === title; }));
    };
    return Store;
}());
exports.Store = Store;
function helloWorld(obj) {
    return { hello: "hello suka", obj: obj };
}
var store = new Store();
store.register("Command", helloWorld);
store.findByFunctionName("Command", "helloWorld");
store.unregister("helloWorld");
store.findByFunctionName("Command", "helloWorld");
//# sourceMappingURL=store.js.map