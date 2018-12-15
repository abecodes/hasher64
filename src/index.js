const encode = require("./_encode");
const decode = require("./_decode");
const decodeFile = require("./_decodeFile");

module.exports = {
  encode,
  decode,
  atob: encode,
  btoa: decodeFile
};
