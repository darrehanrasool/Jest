export function transformToNumber(value) {
  if (value === undefined) {
    throw Error("empty input");
  }
  if (arguments.length !== 1) {
    throw Error("only one argument allowed");
  }
  if (typeof value !== "number") {
    throw Error("Not a Number Buddy");
  }
  //return NaN
  return +value;
}
