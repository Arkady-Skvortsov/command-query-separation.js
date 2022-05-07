import { inject } from 'inversify';
import { CQS } from './interfaces/cqs.interface';
import { TYPES } from './container/types';
import { Store } from './store';

class Query implements CQS {
  constructor(@inject(TYPES.Store) private store: Store) {}

  public execute(title: string, ...params: any[]): Function {
    const query = this.store.findByFunctionName('Query', title);

    return query?.fn.apply(this, params);
  }
}

export { Query };
