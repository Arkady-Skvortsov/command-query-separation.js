import { CQS } from "./interfaces/cqs.interface";

class Command extends CQS {
  public execute(title: string): void {}
}

export { Command };
