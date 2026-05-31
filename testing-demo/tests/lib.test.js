const lib = require("../lib");

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Mosh");
    expect(result).toMatch(/Mosh/);
    expect(result).toContain("Mosh");
  });
});

describe("getCurrencies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();

    // Too general (Haddan tashqari umumiy - tavsiya etilmaydi)
    expect(result).toBeDefined();
    expect(result).not.toBeNull();

    // Too specific (Haddan tashqari qat'iy/aniq - indeks o'zgarsa test sinadi)
    expect(result[0]).toBe("USD");
    expect(result[1]).toBe("AUD");
    expect(result[2]).toBe("EUR");
    expect(result.length).toBe(3);

    // Proper way (Yaxshi usul - massiv ichida borligini alohida tekshirish)
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");

    // Ideal way (Eng mukammal/ideal usul - elementlar tartibidan qat'i nazar tekshiradi)
    expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]));
  });
});
