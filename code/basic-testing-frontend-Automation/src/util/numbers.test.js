import { describe, expect, it } from "vitest";
import { transformToNumber } from "./numbers";
describe("all about transformToNumber  funtion buddy ", () => {
  // Test case-1 transformToNumber() unit
  it("it should yeild number on providing number of string type", () => {
    let data_1 = "1";
    let result_1 = transformToNumber(data_1);
    expect(result_1).toBe(+data_1);
    expect(result_1).toBeTypeOf("number");
  });

  // Test case-2 transformToNumber() unit
  it("it should yeild NaN on providing input of string type", () => {
    let data_2 = "string";
    let data_3 = {};

    let result_2 = transformToNumber(data_2);
    let result_3 = transformToNumber(data_3);

    expect(result_2).toBeNaN();
    expect(result_3).toBeNaN();
  });

  // Test case-3 transformToNumber() unit
  it("it should yeild error on providing input of empty type", () => {
    let result_3 = () => {
      transformToNumber();
    };
    expect(result_3).toThrow(/empty input/);
  });

  // Test case-4 transformToNumber() unit
  it("it should yeild error on providing multiple arguments", () => {
    let data_1 = "1";
    let data_2 = "2";
    let result_4 = () => {
      transformToNumber(data_1, data_2);
    };
    expect(result_4).toThrow(/only one argument allowed/);
  });
});
