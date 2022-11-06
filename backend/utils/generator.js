"use-strict";

const strings = (len) => {
  let res = "";
  let input = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < len; i++) {
    res += input.charAt(Math.floor(Math.random() * input.length));
  }
  return res;
};

const smallStrings = (len) => {
  let res = "";
  let input = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < len; i++) {
    res += input.charAt(Math.floor(Math.random() * input.length));
  }
  return res;
};

module.exports = { strings, smallStrings };
