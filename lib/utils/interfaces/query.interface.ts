interface IQuery {
  execute(query: string): any;
  register(fn: Function): any;
  unregister(fn: Function): any;
}

export { IQuery };
