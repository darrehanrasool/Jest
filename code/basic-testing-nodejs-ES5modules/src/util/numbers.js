import { validateNumber, validateStringNotEmpty } from "./validation.js";

export function transformToNumber(value) {
  if (value === undefined) {
    throw Error("empty input");
  }
  if (arguments.length !== 1) {
    throw Error("only one argument allowed");
  }
  return +value;
}

export function cleanNumbers(numberValues) {
  const numbers = [];
  for (const numberInput of numberValues) {
    validateStringNotEmpty(numberInput);
    const number = transformToNumber(numberInput);
    validateNumber(number);
    numbers.push(number);
  }
  return numbers;
}
