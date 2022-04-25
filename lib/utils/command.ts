import { CQS } from "./interfaces/cqs.interface";

class Command implements CQS {
  constructor() {}

  public execute(title: string): void {}
}

export { Command };
