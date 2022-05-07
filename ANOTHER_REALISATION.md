## Another implementation that the author was thinking about

Yes, the author was thinking about another implementation that would allow getting rid of the Store abstraction and getting a pure version of CQS, but decided not to do it:

```ts
//functions.ts
const x = 0;

function summTwoNumbers(a, b) {
  x = a + b;
}

function getResult() {
  return x;
}

export { summTwoNumbers, getResult };
```

```ts
//cqs.ts
import { Commmand, Query } from 'cqs.js';
import { summTwoNumbers, getResult } from '../functions';

const command = new Command();
const query = new Query();

command.register(summTwoNumbers);
query.register(getResult);

command.execute('summTwoNumbers', 25, 2);
query.execute('getResult'); //27

command.unregister('summTwoNumbers');
query.unregister('getResult');
```
