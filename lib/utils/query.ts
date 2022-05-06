import { inject, injectable } from "inversify";
import { CQS } from "./interfaces/cqs.interface";
import { TYPES } from "./container/types";
import { Store } from "./store";
import { giveMeArguments } from "./helpers/helper";

class Query implements CQS {
  constructor(@inject(TYPES.Store) private store: Store) {}

  public execute(title: string): Function {
    const query = this.store.findByFunctionName("Query", title);

    return query?.fn();
  }
}

export { Query };
