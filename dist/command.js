"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var array_1 = require("./array");
var Command = /** @class */ (function () {
    function Command() {
    }
    Command.prototype.execute = function (arg) {
        array_1.array.push(arg);
    };
    return Command;
}());
exports.Command = Command;
//# sourceMappingURL=command.js.map