# cqs.js

# About

[CQS](https://github.com/Arkady-Skvortsov/cqs.js/blob/main/CQS.md) implementation for js/ts

# Motivation

I'm really tired; I had seen realisation of CQS in TS/JS: "", "";, but I think my would be better, than them, cause - 1) More comfortable interface for working, 2) Enter point and out point

# How to use

```ts
import { Command, Query } from "cqrs.js";
import { summTwoNumbers, getResult } from "../summ.js";

const command = new Command();
const query = new Query();

// Register new commands/query
command.register(summTwoNumbers);
query.register(getResult);

// Run some command/query by title
command.execute("summTwoNumbers", 2, 25);
query.execute("getResult"); // 27

// Unregister of some command/query by her title
command.unregister("summTwoNumbers");
query.unregister("getResults");
```
