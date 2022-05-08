import { cqsType, payloadFn } from '../lib/utils/interfaces/store.interface';
import { summ } from './mock-data';

describe('Command', () => {
  let store: payloadFn[];
  let findByFunctionName: jest.Mock;
  let execute: jest.Mock;

  beforeAll(() => {
    store = [];
    store.push({ type: 'Command', fn: summ });
    findByFunctionName = jest.fn((type: cqsType, title: string) =>
      store.find((obj) => obj.type === type && obj.fn.name === title),
    );
    execute = jest.fn((title: string, ...params: any) => {
      const obj = findByFunctionName('Command', title);

      return obj.fn.apply(this, params);
    });
  });

  describe('Should be execute a query', () => {
    it('Without arguments', () => {
      execute('summ');

      expect(execute).toBeDefined();
      expect(execute.mock.calls.length).toEqual(1);
    });

    it('With arguments', () => {
      execute('summ');

      expect(execute).toBeDefined();
      expect(execute.mock.calls.length).toEqual(1);
    });
  });
});
