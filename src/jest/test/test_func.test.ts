import test_func from "./test_func";

test('adds 1 + 2 to equal 3', () => {
  expect(test_func(1, 2)).toBe(3);
});