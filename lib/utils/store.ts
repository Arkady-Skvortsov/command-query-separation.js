import {
  Store as IStore,
  cqsType,
  payload,
} from "./interfaces/store.interface";

class Store {
  private readonly store: payload[];

  constructor() {
    this.store = [];
  }

  public register(type: cqsType, fn: Function): void {
    this.store.push({ type, fn });
  }

  public unregister(title: string): void {
    this.store.filter((store, idx) => {
      if (store.fn.name === title) this.store.splice(idx, 1);
    });
  }

  protected findByFunctionName(title: string) {
    return this.store.find((store) => store.fn.name === title);
  }
}

export { Store };
