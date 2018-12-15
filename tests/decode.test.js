const decode = require("../src/_decode");
const TESTVALUES = require("./resources/_testvalues");
const should = require("chai").should();

describe("Testing DECODE functionality", () => {
  it("Should decode a base64 hash into 'hello world'", () => {
    const result = decode(TESTVALUES.stringData.base64);
    result.should.equal(TESTVALUES.stringData.value);
  });
  it("Should not decode the base64 hash into 'another value'", () => {
    const result = decode(TESTVALUES.stringData.base64);
    result.should.not.equal(TESTVALUES.verifyStringData.value);
  });
  it("Should decode base64 hash into 'another value'", () => {
    const result = decode(TESTVALUES.verifyStringData.base64);
    result.should.equal(TESTVALUES.verifyStringData.value);
  });
});
