type cqsType = "Command" | "Query";

interface payload {
  type: cqsType;
  fn: Function;
}

abstract class Store {
  private readonly store: payload[];

  constructor() {
    this.store = [];
  }

  abstract register(type: cqsType, fn: Function): void;
  abstract unregister(title: string): void;
}

export { Store, cqsType, payload };
