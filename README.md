# cqs.js

# About

[CQS](https://github.com/Arkady-Skvortsov/cqs.js/blob/main/CQS.md) implementation for js/ts

# Motivation

I'm really tired; I had seen realisation of CQS in TS/JS: "", "";, but I think my would be better, than them, cause - 1) More comfortable interface for working, 2) Enter point and out point
Here I added the "Store" abstraction for registering events and executing them; THIS IS NOT INCLUDED IN CQS, it's just a pre-fab friendly interface for you, Guys!!! 😊

# How to use

```ts
//cqs.ts
import { Command, Query, Store } from "cqs.js";
import { summTwoNumbers, getResult } from "../summ.js";

const store = new Store();
const command = new Command();
const query = new Query();

// Register new commands/query
store.register("Command", summTwoNumbers);
store.register("Query", getResult);

// Run some command/query by title
command.execute("summTwoNumbers", 2, 25);
query.execute("getResult"); // 27

// Unregister of some command/query by her title
store.unregister("summTwoNumbers");
store.unregister("getResult");
```
