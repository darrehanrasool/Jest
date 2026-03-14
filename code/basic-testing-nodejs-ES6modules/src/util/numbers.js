export function transformToNumber(value) {
  if (value === undefined) {
    throw Error("empty input");
  }
  if (arguments.length !== 1) {
    throw Error("only one argument allowed");
  }
  //return NaN
  return +value;
}
