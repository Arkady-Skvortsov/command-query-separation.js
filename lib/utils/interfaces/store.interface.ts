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

  public abstract register(type: cqsType, fn: Function): void;
  public abstract unregister(title: string): void;
  protected abstract findByFunctionName(title: string): any;
}

export { Store, cqsType, payload };
