# command-query-separation.js

# About

[Command Query Separation](https://github.com/Arkady-Skvortsov/cqs.js/blob/main/CQS.md) implementation for js/ts

# Motivation

I'm really tired; I had seen realisation of CQS in TS/JS: "https://www.npmjs.com/package/ts-cqs", "https://www.npmjs.com/package/@timreynolds/cqs";, but I think my would be better, than them, cause - 1) More comfortable interface for working; 2) The principle is preserved; 3) As an entry and exit point here I added the "Store" abstraction for registering command/query and executing them; THIS IS NOT INCLUDED IN CQS, it's just a pre-fab friendly interface for you, Guys!!! 😘

# How to use

```sh
  npm i cqs.js
```

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
import { Command, Query, Store } from 'cqs.js';
import { summTwoNumbers, getResult } from '../functions';

const store = new Store();
const command = new Command(store);
const query = new Query(store);

// Register new commands/query
store.register('Command', summTwoNumbers);
store.register('Query', getResult);

// Run some command/query by title
command.execute('summTwoNumbers', 2, 25);
query.execute('getResult'); // 27

// Unregister of some command/query by her title
store.unregister('Command', 'summTwoNumbers');
store.unregister('Query', 'getResult');
```
