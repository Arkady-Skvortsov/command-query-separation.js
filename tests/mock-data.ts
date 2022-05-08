let x = 0;

function summ(y: number = 10) {
  x = x += y;
}

function getVariable() {
  return x;
}

export { summ, getVariable };
