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

    console.log(`${fn.name} had been added in store ${this.store.length}`);
  }

  public unregister(title: string): void {
    this.store.filter((store) => store.fn.name !== title);

    console.log(`${this.store.length}`);
  }

  public findByFunctionName(type: cqsType, title: string) {
    console.log(
      this.store.find((store) => store.type === type && store.fn.name === title)
    );
  }
}

function helloWorld(obj: Object) {
  return { hello: "hello suka", obj };
}

export { Store };
