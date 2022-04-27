import { cqsType } from "../lib/utils/interfaces/store.interface";
import { Store } from "../lib/utils/store";

describe("Store", () => {
  let store: any;
  let type;
  let fn: Function;

  beforeAll(() => {
    type = jest.fn(() => "Query");
    fn = function () {};
  });

  it("Store should be defined", () => {
    expect(store).toBeDefined();
  });

  describe("Should be register a new function in store", () => {
    it("Should be register a new Query", () => {});

    it("Should be register a new Command", () => {});
  });

  describe("Should be unregister function from store", () => {
    it("Should be unregister a query", () => {});

    it("Shold be unregister a command", () => {});
  });

  it("Should be define a function by her title from store", () => {});
});
