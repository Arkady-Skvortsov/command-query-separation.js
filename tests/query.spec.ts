import { cqsType } from "../lib/utils/interfaces/store.interface";
import { Query } from "../lib/utils/query";
import { Store } from "../lib/utils/store";

describe("Query", () => {
  let store: Store;
  let query: Query;
  let type: cqsType;
  let fn: Function;

  beforeEach(() => {
    type = "Query";
    store = new Store();
  });

  describe("Should be execute a query", () => {
    it("Without arguments", () => {});
    it("With arguments", () => {});
  });
});
