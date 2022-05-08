import { cqsType, payloadFn } from '../lib/utils/interfaces/store.interface';
import { getVariable } from './mock-data';

describe('Query', () => {
  let store: payloadFn[];
  let findByFunctionName: jest.Mock;
  let execute: jest.Mock;

  beforeAll(() => {
    store = [];
    store.push({ type: 'Query', fn: getVariable });
    findByFunctionName = jest.fn((type: cqsType, title: string) =>
      store.find((obj) => obj.type === type && obj.fn.name === title),
    );
    execute = jest.fn((title: string, ...params: any) => {
      const obj = findByFunctionName('Query', title);

      return obj.fn.apply(this, params);
    });
  });

  describe('Should be execute a query', () => {
    it('Without arguments', () => {
      execute('getVariable');

      expect(execute).toBeDefined();
      expect(execute.mock.calls.length).toEqual(1);
      expect(execute.mock.results[0].value).toEqual(0);
    });
  });
});
