const lib = require("../lib");

// 1-test: Arrow funksiya (() =>) qo'shildi
test("absolute - should return a positive number if input is positive", () => {
  const result = lib.absolute(1);
  expect(result).toBe(1);
});

// 2-test: Arrow funksiya (() =>) qo'shildi
test("absolute - should return a positive number if input is negative", () => {
  const result = lib.absolute(-1);
  expect(result).toBe(1);
});

// 3-test: Kutilayotgan natija (toBe) 1 emas, 0 bo'lishi kerak
test("absolute - should return 0 if input is 0", () => {
  const result = lib.absolute(0);
  expect(result).toBe(0); // 0 kiritilganda 0 qaytishi kerak
});
