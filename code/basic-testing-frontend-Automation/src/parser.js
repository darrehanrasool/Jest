export function extractNumbers(formData) {
  const num1Input = formData.get("num1");
  const num2Input = formData.get("num2");
  console.log(typeof num1Input); // DOM return type string
  console.log(typeof num2Input); // DOM return type string
  return [num1Input, num2Input];
}
