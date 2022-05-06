import { cqsType } from "../lib/utils/interfaces/store.interface";
import { Store } from "../lib/utils/store";
import { getVariable, summ } from "./mock-data";

describe("Store", () => {
  let store: Store;
  let type: cqsType;
  let fn: Function;

  beforeEach(() => {
    store = new Store();
  });

  it("Store should be defined", () => {
    expect(store).toBeDefined();
  });

  describe("Should be register a new function in store", () => {
    it("Should be register a new Query", () => {
      type = "Query";
      fn = getVariable;

      store.register(type, fn);

      // expect(store.findByFunctionName(type, "getVariable")).toBe({
      //   type,
      //   fn,
      // });
    });

    it("Should be register a new Command", () => {
      type = "Command";
      fn = summ;

      store.register(type, fn);
    });
  });

  describe("Should be unregister a function from store", () => {
    it("Should be unregister a query", () => {
      type = "Query";
      store.unregister(type, "getVariable");
    });

    it("Shold be unregister a command", () => {
      type = "Command";
      store.unregister(type, "summ");
    });
  });
});
