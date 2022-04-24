interface ICommand {
  execute(command: string): any;
  register(fn: Function): any;
  unregister(fn: Function): any;
}

export { ICommand };
