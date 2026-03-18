import { it, expect, describe } from "vitest";

import { validateNumber, validateStringNotEmpty } from "./validation";

describe("all about validateStringNotEmpty funtion buddy", () => {
  // Test case-1 validateStringNotEmpty() unit
  it("should throw an error, if an empty string is provided", () => {
    const input = "";
    const validationFn = () => {
      validateStringNotEmpty(input);
    };
    expect(validationFn).toThrow();
  });

  // Test case-2 validateStringNotEmpty() unit
  it("should throw an error with a message that contains a reason (must not be empty)", () => {
    const input = "";
    const validationFn = () => {
      validateStringNotEmpty(input);
    };
    expect(validationFn).toThrow(/Invalid input - must not be empty./);
  });

  // Test case-3 validateStringNotEmpty() unit
  it("should throw an error if a long string of blanks is provided", () => {
    const input = "       ";
    const validationFn = () => {
      validateStringNotEmpty(input);
    };
    expect(validationFn).toThrow();
  });

  // Test case-4 validateStringNotEmpty() unit
  it("should throw an error if any other value than a string is provided", () => {
    const inputNum = 1;
    const inputBool = true;
    const inputObj = {};
    const inputArr = [];

    const validationFnNum = () => {
      validateStringNotEmpty(inputNum);
    };
    const validationFnBool = () => {
      validateStringNotEmpty(inputBool);
    };
    const validationFnObj = () => {
      validateStringNotEmpty(inputObj);
    };
    const validationFnArr = () => {
      validateStringNotEmpty(inputArr);
    };

    expect(validationFnNum).toThrow();
    expect(validationFnBool).toThrow();
    expect(validationFnObj).toThrow();
    expect(validationFnArr).toThrow();
  });

  // Test case-5 validateStringNotEmpty() unit
  it("should not throw an error, if a non-empty string is provided", () => {
    const input = "valid";
    const validationFn = () => {
      validateStringNotEmpty(input);
    };
    expect(validationFn).not.toThrow();
  });
});

describe("all about validateNumber funtion buddy", () => {
  // Test case-1  validateNumber() unit
  it("should throw an error if NaN is provided", () => {
    const input = NaN;
    const validationFn = () => {
      validateNumber(input);
    };
    expect(validationFn).toThrow();
  });

  // Test case-2  validateNumber() unit
  it("should throw an error with a message that contains a reason (invalid number)", () => {
    const input = NaN;
    const validationFn = () => {
      validateNumber(input);
    };
    expect(validationFn).toThrow(/Invalid number input./);
  });

  // Test case-3  validateNumber() unit
  it("should throw an error if a non-numeric value is provided", () => {
    const input = "1";
    const validationFn = () => {
      validateNumber(input);
    };
    expect(validationFn).toThrow();
  });

  // Test case-4 validateNumber() unit
  it("should not throw an error, if a number is provided", () => {
    const input = 1;
    const validationFn = () => {
      validateNumber(input);
    };
    expect(validationFn).not.toThrow();
  });
});
