import { injectable } from 'inversify';
import 'reflect-metadata';
import {
  Store as IStore,
  cqsType,
  payloadFn,
} from './interfaces/store.interface';

@injectable()
class Store implements IStore {
  private readonly store: payloadFn[];

  constructor() {
    this.store = [];
  }

  public register(type: cqsType, fn: Function): void {
    this.store.push({ type, fn });
  }

  public unregister(type: cqsType, title: string): void {
    this.store.find((store, idx) =>
      store.type === type && store.fn.name === title
        ? this.store.splice(idx, 1)
        : undefined,
    );
  }

  public findByFunctionName(
    type: cqsType,
    title: string,
  ): payloadFn | undefined {
    return this.store.find(
      (store) => store.type === type && store.fn.name === title,
    );
  }
}

export { Store };
