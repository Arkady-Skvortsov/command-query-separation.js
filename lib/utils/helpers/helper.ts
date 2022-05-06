function giveMeArguments(fn: Parameters<typeof Function>[0]): any {
  return fn;
}

export { giveMeArguments };
