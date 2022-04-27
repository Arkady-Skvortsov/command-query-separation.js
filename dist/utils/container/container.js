"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = void 0;
const inversify_1 = require("inversify");
require("reflect-metadata");
const types_1 = require("./types");
const store_1 = require("../store");
const command_1 = require("../command");
const container = new inversify_1.Container();
exports.container = container;
container.bind(types_1.TYPES.Store).to(store_1.Store);
container.bind(types_1.TYPES.Command).to(command_1.Command);
//# sourceMappingURL=container.js.map