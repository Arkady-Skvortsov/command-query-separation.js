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
const command_1 = require("./command");
const container_1 = require("./container/container");
let Store = class Store {
    store;
    constructor() {
        this.store = [];
    }
    register(type, fn) {
        this.store.push({ type, fn });
    }
    unregister(type, title) {
        const typeArray = this.store.filter((store) => store.type === type);
        typeArray.filter((typeArr, idx) => {
            if (typeArr.fn.name === title)
                this.store.splice(idx, 1);
        });
    }
    findByFunctionName(title) {
        return this.store.find((store) => store.fn.name === title);
    }
};
Store = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], Store);
exports.Store = Store;
function getMyName(x) {
    let a = x;
    return `Arkadiy`;
}
const store = new Store();
store.register("Query", getMyName);
const command = container_1.container.get(command_1.Command);
command.execute("getMyName");
//# sourceMappingURL=store.js.map