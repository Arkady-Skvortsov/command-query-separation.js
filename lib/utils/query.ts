import { CQS } from "./interfaces/cqs.interface";

class Query implements CQS {
  public execute(query: string): void {}
}

export { Query };
