# CQS conception

Command-query separation (CQS) is a principle of imperative computer programming. It was devised by Bertrand Meyer as part of his pioneering work on the Eiffel programming language.
It states that every method should either be a command that performs an action, or a query that returns data to the caller, but not both. In other words, asking a question should not change the answer.
More formally, methods should return a value only if they are referentially transparent and hence possess no side effects.

For using it you need to have a global state(object, class) with you'r variables

# Basics

Martin Fowler: https://martinfowler.com/bliki/CommandQuerySeparation.html

# Simple example of usage

## Without CQS

```ts
let arr: number[] = [];

function pushInArrayAndReturnByIndex(elem: number, idx: number): number {
  arr.push(elem);

  return arr.find((arr, i) => idx === i);
}
```

## With CQS

```ts
let arr: number[] = [];

function pushInArray(elem: number) {
  arr.push(elem);
}

function getResult(idx: number): number {
  return arr.find((arr, i) => idx === i);
}
```
