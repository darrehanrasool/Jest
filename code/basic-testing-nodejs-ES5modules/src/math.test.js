import { describe, expect, it } from "vitest";
import { add } from "./math";
describe("all about add funtion buddy", () => {
  // Test case-1 Add funtion() unit
  it("testing add funtion argument array of numbers", () => {
    let data_1 = [1, 2];
    let value_1 = data_1.reduce((accumulater, current) => {
      return accumulater + current;
    }, 0);
    let result_1 = add(data_1);
    expect(result_1).toBe(value_1);
  });
  // Test case-2 Add funtion() unit
  it("it should yeild NaN if atleast one invalid input is provided", () => {
    let data_2 = ["hello", 1];
    let result_2 = add(data_2);
    expect(result_2).toBeNaN();
  });
  // Test case-3 Add funtion() unit
  it("it should yeild correct sum for numbers of string type", () => {
    let data_3 = ["1", "2"];
    let value_3 = data_3.reduce((accumulater, current) => {
      return +accumulater + +current;
    }, 0);
    let result_3 = add(data_3);
    expect(result_3).toBe(value_3);
  });
  // Test case-4 Add funtion() unit
  it("it should yeild 0 on passing [] array", () => {
    let data_4 = [];
    let result_4 = add(data_4);
    expect(result_4).toBe(0);
  });
  // Test case-5 Add funtion() unit
  it("it should yeild error on passing empty arguments", () => {
    let result_5 = () => {
      add();
    };
    expect(result_5).toThrow(/numbers is not iterable/);
  });
  // Test case-6 Add funtion() unit
  it("it should yeild error on passing multiple arguments", () => {
    let number_1 = 1;
    let number_2 = 2;
    let result_6 = () => {
      add(number_1, number_2);
    };
    expect(result_6).toThrow(/numbers is not iterable/);
  });
});
