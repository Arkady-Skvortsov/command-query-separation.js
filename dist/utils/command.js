"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
var Command = /** @class */ (function () {
    function Command() {
    }
    Command.prototype.execute = function () { };
    Command.prototype.register = function (fn) { };
    Command.prototype.unregister = function (fn) { };
    return Command;
}());
exports.Command = Command;
//# sourceMappingURL=command.js.map