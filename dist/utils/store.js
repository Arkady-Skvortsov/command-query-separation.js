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
exports.Store = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
let Store = class Store {
    store;
    constructor() {
        this.store = [];
    }
    register(type, fn) {
        this.store.push({ type, fn });
    }
    unregister(type, title) {
        this.store.find((store, idx) => store.type === type && store.fn.name === title
            ? this.store.splice(idx, 1)
            : undefined);
    }
    findByFunctionName(type, title) {
        return this.store.find((store) => store.type === type && store.fn.name === title);
    }
};
Store = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], Store);
exports.Store = Store;
//# sourceMappingURL=store.js.map