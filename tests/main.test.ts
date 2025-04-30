import { convert } from "../main";
import { describe, test, expect } from "@jest/globals";

describe("Convert number to words", () => {
  test("Between 0 to 9", () => {
    expect(convert(0)).toBe("zero");
    expect(convert(1)).toBe("one");
    expect(convert(2)).toBe("two");
    expect(convert(3)).toBe("three");
    expect(convert(4)).toBe("four");
    expect(convert(5)).toBe("five");
    expect(convert(6)).toBe("six");
    expect(convert(7)).toBe("seven");
    expect(convert(8)).toBe("eight");
    expect(convert(9)).toBe("nine");
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

  test("Between 21 to 99", () => {
    expect(convert(24)).toBe("twenty four");
    expect(convert(39)).toBe("thirty nine");
    expect(convert(42)).toBe("forty two");
    expect(convert(56)).toBe("fifty six");
    expect(convert(63)).toBe("sixty three");
    expect(convert(96)).toBe("ninety six");
    expect(convert(69)).toBe("sixty nine");
  });

  test("Between 100 to 999", () => {
    expect(convert(123)).toBe("one hundred twenty three");
    expect(convert(254)).toBe("two hundred fifty four");
    expect(convert(271)).toBe("two hundred seventy one");
    expect(convert(999)).toBe("nine hundred ninety nine");
    expect(convert(420)).toBe("four hundred twenty");
    expect(convert(969)).toBe("nine hundred sixty nine");
  });

  test("Large numbers", () => {
    expect(convert(1000000)).toBe("one million");
    expect(convert(1000001)).toBe("one million one");
    expect(convert(1111111)).toBe("one million one hundred eleven thousand one hundred eleven");
    expect(convert(10000000)).toBe("ten million");
    expect(convert(100000000)).toBe("one hundred million");
    expect(convert(1000000000)).toBe("one billion");
    expect(convert(1000000001)).toBe("one billion one");
    expect(convert(999999999999)).toBe("nine hundred ninety nine billion nine hundred ninety nine million nine hundred ninety nine thousand nine hundred ninety nine");
  })
});