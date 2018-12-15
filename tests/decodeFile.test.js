const decodeFile = require("../src/_decodeFile");
const TESTVALUES = require("./resources/_testvalues");
const should = require("chai").should();
const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);

describe("Testing DECODEFILE functionality", () => {
  it("Should decode a base64 hash to the buffer of a transparent 1x1.png", async () => {
    try {
      const buffer = await readFileAsync(TESTVALUES.fileData.value);
      const result = decodeFile(TESTVALUES.fileData.base64);

      buffer.equals(result).should.be.true;
    } catch (error) {
      throw error;
    }
  });
  it("Should not decode a base64 hash from a blue 1x1.png to the buffer of a transparent 1x1.png", async () => {
    try {
      const buffer = await readFileAsync(TESTVALUES.verifyFileData.value);
      const result = decodeFile(TESTVALUES.fileData.base64);

      buffer.equals(result).should.not.be.true;
    } catch (error) {
      throw error;
    }
  });
  it("Should decode a base64 string to the buffer of a blue 1x1.png", async () => {
    try {
      const buffer = await readFileAsync(TESTVALUES.verifyFileData.value);
      const result = decodeFile(TESTVALUES.verifyFileData.base64);

      buffer.equals(result).should.be.true;
    } catch (error) {
      throw error;
    }
  });
});
