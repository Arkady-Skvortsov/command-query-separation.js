"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Command = void 0;
const helper_1 = require("./helpers/helper");
class Command {
    execute(title) {
        function helloWorld(title) {
            return title;
        }
        const myFunc = (0, helper_1.giveMeArguments)(helloWorld);
        console.log(myFunc);
    }
}
exports.Command = Command;
const command = new Command();
command.execute("Pipi");
//# sourceMappingURL=command.js.map