import { injectable } from "inversify";
import "reflect-metadata";
import { Command } from "./command";
import { container } from "./container/container";
import { TYPES } from "./container/types";
import {
  Store as IStore,
  cqsType,
  payload,
} from "./interfaces/store.interface";

@injectable()
class Store {
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

  public findByFunctionName(title: string) {
    return this.store.find((store) => store.fn.name === title);
  }
}

function getMyName(x: string) {
  let a = x;

  return `Arkadiy`;
}

const store = new Store();
store.register("Query", getMyName);

const command = container.get(Command);
command.execute("getMyName");

export { Store };
