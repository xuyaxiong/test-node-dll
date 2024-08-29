import { add, addByDll } from "../src";

test("add two numbers correctly", () => {
  const result = addByDll(2, 3);
  expect(result).toBe(5);
});
