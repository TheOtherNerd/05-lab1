const { translate } = require("../src/piglatin");

describe("translate function", () => {
  test("word that starts with o", () => {
    const result = translate("ocean");
    expect(result).toBe("oceanway");
  });
  test("word that starts with a", () => {
    const result = translate("actual");
    expect(result).toBe("actualway");
  });
  test("word that starts with e", () => {
    const result = translate("eat");
    expect(result).toBe("eatway");
  });
  test("word that starts with i", () => {
    const result = translate("it");
    expect(result).toBe("itway");
  });
  test("word that starts with u", () => {
    const result = translate("umbrella");
    expect(result).toBe("umbrellaway");
  });
  test("word that starts with a", () => {
    const result = translate("Apple");
    expect(result).toBe("appleway");
  });
  test("words starting with y", () => {
    const result = translate("yodel");
    expect(result).toBe("odelyay");
  });
  test("words starting with n", () => {
    const result = translate("nope");
    expect(result).toBe("openay");
  });
  test("word starting with 2 not vowels", () => {
    const result = translate("slinky");
    expect(result).toBe("inkyslay");
  });
  test("two constinants", () => {
    const result = translate("the");
    expect(result).toBe("ethay");
  });
  test("three constinants", () => {
    const result = translate("scrub");
    expect(result).toBe("ubscray");
  });
});
