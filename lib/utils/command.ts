import { inject } from 'inversify';
import { TYPES } from './container/types';
import { CQS } from './interfaces/cqs.interface';
import { Store } from './store';

class Command implements CQS {
  constructor(@inject(TYPES.Store) private store: Store) {}

  public execute(title: string, ...params: any[]): Function {
    const command = this.store.findByFunctionName('Command', title);

    return command?.fn.apply(this, params);
  }
}

export { Command };
