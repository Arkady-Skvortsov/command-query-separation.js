type cqsType = 'Command' | 'Query';

interface payload {
  type: cqsType;
  fn: Function;
}

abstract class Store {
  public abstract register(type: cqsType, fn: Function): void;
  public abstract unregister(type: cqsType, title: string): void;
  public abstract findByFunctionName(
    type: cqsType,
    title: string,
  ): payload | undefined;
}

export { Store, cqsType, payload };
