"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Checker = void 0;
function Checker() {
    return function (target, proreptyKey, descriptor) {
        console.log(target, proreptyKey, descriptor);
    };
}
exports.Checker = Checker;
//# sourceMappingURL=checker.decorator.js.map