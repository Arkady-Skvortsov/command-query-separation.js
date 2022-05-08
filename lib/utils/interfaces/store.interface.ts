type cqsType = 'Command' | 'Query';

interface payloadFn {
  type: cqsType;
  fn: Function;
}

abstract class Store {
  public abstract register(type: cqsType, fn: Function): void;
  public abstract unregister(type: cqsType, title: string): void;
  public abstract findByFunctionName(
    type: cqsType,
    title: string,
  ): payloadFn | undefined;
}

export { Store, cqsType, payloadFn };
