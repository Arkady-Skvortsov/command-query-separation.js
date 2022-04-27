"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Helper = void 0;
function Helper() {
    return function (target, propertyKey, descriptor) {
        console.log(target, propertyKey, descriptor.value);
        //type AllParams = Parameters<typeof getMyName>;
        //type first = AllParams[0];
    };
}
exports.Helper = Helper;
//# sourceMappingURL=helper.decorator.js.map