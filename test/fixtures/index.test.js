import { sayHi } from "../../src/index.esm.js";

describe("sayHi", function () {
  describe("default", function () {
    it('should return "Hi!"', function () {
      sayHi() === "Hi!";
    });
  });
});
