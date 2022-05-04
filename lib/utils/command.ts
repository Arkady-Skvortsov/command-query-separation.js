import { inject, injectable } from "inversify";
import { container } from "./container/container";
import { TYPES } from "./container/types";
import { CQS } from "./interfaces/cqs.interface";
import { giveMeArguments } from "./helpers/helper";
import { Store } from "./store";

class Command implements CQS {
  public execute(title: string): any {}
}

export { Command };
