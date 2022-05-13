import { sayHello, sum } from "./other";

describe("sayHello", () => {
  it("should return 'Hello Alen' when name is 'Alen'", () => {
    expect(sayHello("Alen")).toBe("Hello Alen");
  });
});

describe("Sum", () => {
  it("should be a function", () => {
    expect(sum).toBeInstanceOf(Function);
  });

  it("should sum 5 and 3 and return 8", () => {
    expect(sum(5, 3)).toBe(8);
  });

  it("should sum 2 and -7 and return -5", () => {
    expect(sum(2, -7)).toBe(-5);
  });
});
