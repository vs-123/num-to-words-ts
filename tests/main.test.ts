import { convert } from "../main";
import { describe, test, expect } from "@jest/globals";

describe("Convert number to words", () => {
  test("Single digit numbers", () => {
    expect(convert(1)).toBe("one");
    expect(convert(2)).toBe("two");
    expect(convert(3)).toBe("three");
    expect(convert(4)).toBe("four");
    expect(convert(5)).toBe("five");
    expect(convert(6)).toBe("six");
    expect(convert(7)).toBe("seven");
    expect(convert(8)).toBe("eight");
    expect(convert(9)).toBe("nine");
    expect(convert(0)).toBe("zero");
  });

  test("Two digit numbers", () => {
    expect(convert(11)).toBe("eleven");
    expect(convert(15)).toBe("fifteen");
    expect(convert(50)).toBe("fifty");
    expect(convert(70)).toBe("seventy");
  });

  test("Two digit -teen numbers", () => {
    expect(convert(14)).toBe("fourteen");
    expect(convert(16)).toBe("sixteen");
    expect(convert(17)).toBe("seventeen");
    expect(convert(18)).toBe("eighteen"); // <-- edge case
    expect(convert(19)).toBe("nineteen");
  });
});