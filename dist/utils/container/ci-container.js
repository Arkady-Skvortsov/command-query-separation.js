"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inversify_1 = require("inversify");
var types_1 = require("./types");
var store_1 = require("../store");
var container = new inversify_1.Container();
container.bind(types_1.TYPES.Store).to(store_1.Store);
//# sourceMappingURL=ci-container.js.map