import { IQuery } from "./interfaces/query.interface";

class Query implements IQuery {
  execute(query: string) {}

  register(fn: Function) {}

  unregister(fn: Function) {}
}

export { Query };
