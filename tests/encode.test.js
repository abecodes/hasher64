const encode = require("../src/_encode");
const TESTVALUES = require("./resources/_testvalues");
const should = require("chai").should();
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

describe("Testing ENCODE functionality", () => {
  it("Should encode 'hello world' in base64", () => {
    const result = encode(TESTVALUES.stringData.value);
    result.should.equal(TESTVALUES.stringData.base64);
  });
  it("Should not encode 'another value' in the same base64 for hello world", () => {
    const result = encode(TESTVALUES.verifyStringData.value);
    result.should.not.equal(TESTVALUES.stringData.base64);
  });
  it("Should encode 'another value' in base64", () => {
    const result = encode(TESTVALUES.verifyStringData.value);
    result.should.equal(TESTVALUES.verifyStringData.base64);
  });
  it("Should encode a transparent 1x1.png to a base64 hash", async () => {
    try {
      const buffer = await readFileAsync(TESTVALUES.fileData.value);
      const result = encode(buffer);
      result.should.equal(TESTVALUES.fileData.base64);
    } catch (error) {
      throw error;
    }
  });
  it("Should not encode a blue 1x1.png to a transparent 1x1.png base64 hash", async () => {
    try {
      const buffer = await readFileAsync(TESTVALUES.verifyFileData.value);
      const result = encode(buffer);
      result.should.not.equal(TESTVALUES.fileData.base64);
    } catch (error) {
      throw error;
    }
  });
  it("Should encode a blue 1x1.png to a base64 hash", async () => {
    try {
      const buffer = await readFileAsync(TESTVALUES.verifyFileData.value);
      const result = encode(buffer);
      result.should.equal(TESTVALUES.verifyFileData.base64);
    } catch (error) {
      throw error;
    }
  });
});
