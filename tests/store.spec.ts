import { cqsType, payloadFn } from '../lib/utils/interfaces/store.interface';
import { getVariable, summ } from './mock-data';

describe('Store', () => {
  let store: payloadFn[];
  let mockRegisterFn: jest.Mock;
  let mockUnregisterFn: jest.Mock;
  let mockFindFnByName: jest.Mock;

  beforeAll(() => {
    store = [];
    mockRegisterFn = jest.fn((payload: payloadFn) => store.push(payload));
    mockUnregisterFn = jest.fn((type: cqsType, title: string) =>
      store.filter((obj, idx) =>
        obj.type === type && obj.fn.name === title
          ? store.splice(idx, 1)
          : undefined,
      ),
    );
    mockFindFnByName = jest.fn((type: cqsType, title: string) =>
      store.find((obj) => obj.type === type && obj.fn.name === title),
    );
  });

  it('Store should be defined', () => {
    expect(store).toBeDefined();
  });

  describe('Should be register a new function in store', () => {
    it('Should be register a new Query', () => {
      const query = { type: 'Query', fn: getVariable };

      mockRegisterFn(query);

      expect(mockRegisterFn.mock.calls.length).toEqual(1);
      expect(store.length).toEqual(1);
      expect(mockFindFnByName('Query', 'getVariable')).toBe(query);
    });

    it('Should be register a new Command', () => {
      const command = { type: 'Command', fn: summ };

      mockRegisterFn(command);

      expect(mockRegisterFn.mock.calls.length).toEqual(1);
      expect(store.length).toEqual(2);
      expect(mockFindFnByName('Command', 'summ')).toBe(command);
    });
  });

  describe('Should be unregister a function from store', () => {
    it('Should be unregister a Query', () => {
      const queryParams = { type: 'Query', title: 'getVariable' };

      mockUnregisterFn(queryParams);

      expect(mockUnregisterFn.mock.calls.length).toEqual(1);
      expect(store.length).toEqual(1);
      expect(mockFindFnByName(queryParams)).toBeUndefined();
    });

    it('Shold be unregister a Command', () => {
      const commandParams = { type: 'Command', title: 'summ' };

      mockUnregisterFn(commandParams);

      expect(mockUnregisterFn.mock.calls.length).toEqual(1);
      expect(store.length).toEqual(0);
      expect(mockFindFnByName(commandParams)).toBeUndefined();
    });
  });
});
