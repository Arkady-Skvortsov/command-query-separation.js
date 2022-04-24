import { ICommand } from "./interfaces/command.interface";

class Command implements ICommand {
  execute() {}

  register(fn: Function) {}

  unregister(fn: Function) {}
}

export { Command };
