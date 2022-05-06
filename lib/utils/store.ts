import { injectable } from "inversify";
import "reflect-metadata";
import { IStore, cqsType, payload } from "./interfaces/store.interface";

@injectable()
class Store implements IStore {
  private readonly store: payload[];

  constructor() {
    this.store = [];
  }

  public register(type: cqsType, fn: Function): void {
    this.store.push({ type, fn });
  }

  public unregister(type: cqsType, title: string): void {
    const typeArray = this.store.filter((store) => store.type === type);

    typeArray.filter((typeArr, idx) => {
      if (typeArr.fn.name === title) this.store.splice(idx, 1);
    });
  }

  public findByFunctionName(type: cqsType, title: string): payload | undefined {
    return this.store.find(
      (store) => store.type === type && store.fn.name === title
    );
  }
}

export { Store };
