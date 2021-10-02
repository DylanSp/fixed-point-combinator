import { fact } from "../src/nonCurried";
import { fact as factCurried } from "../src/curried";

describe("Fixed-point combinator tests", () => {
  describe("Non-curried version", () => {
    it("fix(factorial, 5) should be 120", () => {
      const result = fact(5);

      expect(result).toBe(120);
    });
  });

  describe("Curried version", () => {
    it("fix(factorial)(5) should be 120", () => {
      const result = factCurried(5);

      expect(result).toBe(120);
    });
  });
});
