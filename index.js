const input = "Dan Da Dan Season 2";

// String version of the regex (no slashes, escape `\`)
const regexStr = "Season\\s+(\\d+)";
const reg = new RegExp(regexStr, "ig");
const regggg = input.match(reg);
console.log(regggg[1]);