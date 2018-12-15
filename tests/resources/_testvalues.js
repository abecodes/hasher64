const path = require("path");

module.exports = {
  stringData: {
    value: "hello world",
    base64: "aGVsbG8gd29ybGQ="
  },
  verifyStringData: {
    value: "another value",
    base64: "YW5vdGhlciB2YWx1ZQ=="
  },
  fileData: {
    value: path.join(__dirname, "./1x1.png"),
    base64:
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR4nGP6zwAAAgcBApocMXEAAAAASUVORK5CYII="
  },
  verifyFileData: {
    value: path.join(__dirname, "./1x1blue.png"),
    base64:
      "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABAQMAAAAl21bKAAAAA1BMVEUIAP+Ea4PvAAAACklEQVR4nGNiAAAABgADNjd8qAAAAABJRU5ErkJggg=="
  }
};
