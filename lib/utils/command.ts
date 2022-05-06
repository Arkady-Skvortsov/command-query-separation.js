import { inject, injectable } from "inversify";
import { container } from "./container/container";
import { TYPES } from "./container/types";
import { CQS } from "./interfaces/cqs.interface";
import { giveMeArguments } from "./helpers/helper";
import { Store } from "./store";

class Command implements CQS {
  constructor(@inject(TYPES.Store) private store: Store) {}

  public execute(title: string): Function {
    const command = this.store.findByFunctionName("Command", title);

    return command?.fn();
  }
}

export { Command };
