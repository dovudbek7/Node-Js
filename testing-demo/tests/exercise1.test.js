const { fizzBuzz } = require('../exercise1');

describe('fizzBuzz', () => {
  it('should throw if input is not a number', () => {
    expect(() => fizzBuzz('abc')).toThrow('Input should be a number.');
    expect(() => fizzBuzz(null)).toThrow('Input should be a number.');
    expect(() => fizzBuzz(undefined)).toThrow('Input should be a number.');
    expect(() => fizzBuzz(true)).toThrow('Input should be a number.');
  });

  it('should return FizzBuzz when divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
    expect(fizzBuzz(30)).toBe('FizzBuzz');
    expect(fizzBuzz(0)).toBe('FizzBuzz');
  });

  it('should return Fizz when divisible by 3 only', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
    expect(fizzBuzz(9)).toBe('Fizz');
  });

  it('should return Buzz when divisible by 5 only', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
    expect(fizzBuzz(10)).toBe('Buzz');
  });

  it('should return input when not divisible by 3 or 5', () => {
    expect(fizzBuzz(1)).toBe(1);
    expect(fizzBuzz(7)).toBe(7);
    expect(fizzBuzz(11)).toBe(11);
  });
});
