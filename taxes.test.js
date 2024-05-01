// taxes.test.js

// calculatetaxes Function Tests
describe("calculateTaxes tests", function () {
  it("should calculate lower-bracket taxes", function () {
    expect(calculateTaxes(10000)).toEqual(1500);
    expect(calculateTaxes(20000)).toEqual(3000);
    expect(1 + 1).toEqual(2);
  });

  it("should calculate higher-bracket taxes", function () {
    expect(calculateTaxes(50000)).toEqual(12500);
    expect(calculateTaxes(80000)).toEqual(20000);
  });
});
// RemoveDupes Tests
describe("removeDupes tests", function () {
  it("should remove depulicates from an array", function () {
    expect(removeDupes([1, 1, 2, 2, 3, 4])).toEqual([1, 2, 3, 4]);
    expect(removeDupes([1, 1, 2, 3])).toEqual([1, 2, 3]);
  });

  it("should remove depulicates from an string", function () {
    expect(removeDupes("hello")).toEqual("helo");
    expect(removeDupes("hello")).toBeInstanceOf(String);
  });

  it("should remove value from array", function () {
    expect(remove([1, 2, 3, 4, 5, 6], 6)).not.toContain(6);
  });
});

describe("submitForm tests", () => {
  it("saves input val to usernames array", () => {
    (input.value = "Seanfroe"), "froesean";
    submitForm();
    expect(usernames.length).toBe(1);
    expect(usernames).toContain("Seanfroe", "froesean");
  });
  it("saves long usernames", () => {
    input.value = "I am a panda luvr 567";
    submitForm();
    expect(usernames.length).toBe(1);
  });
});
afterEach(function () {
  input.value = "";
  usernames = [];
  console.log("After Each");
});
beforeEach(() => {
  console.log("Before Each");
});

beforeAll(() => {
  console.log("Before All");
});
afterAll(() => {
  console.log("After All");
});
